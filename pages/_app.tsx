import { useCallback, useEffect, useRef, useSyncExternalStore } from "react"
import { useRouter } from "next/router"
import Layout from '../components/Layout'
import CookieConsent from '../components/CookieConsent'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Space_Grotesk, Manrope } from "next/font/google"

const COOKIE_CONSENT_KEY = "cookie-consent"
const CONSENT_CHANGE_EVENT = "cookie-consent-change"

type Consent = "accepted" | "rejected" | null

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-body",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-brand",
})

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-heading",
})

const subscribeToConsent = (callback: () => void) => {
  window.addEventListener("storage", callback)
  window.addEventListener(CONSENT_CHANGE_EVENT, callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback)
  }
}

const getConsentSnapshot = (): Consent => {
  const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY)
  return stored === "accepted" || stored === "rejected" ? stored : null
}

const getConsentServerSnapshot = (): Consent => null

const storeConsent = (value: "accepted" | "rejected") => {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT))
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const consent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getConsentServerSnapshot)
  const hasSentInitialPageView = useRef(false)

  const pushGtag = useCallback((...args: unknown[]) => {
    const win = window as any
    if (typeof win.gtag === "function") {
      win.gtag(...args)
      return
    }
    win.dataLayer = win.dataLayer || []
    win.dataLayer.push(args)
  }, [])

  const sendPageView = useCallback(() => {
    pushGtag("event", "page_view", {
      send_to: "G-HQF9CZ8HER",
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pushGtag])

  const grantConsent = useCallback(() => {
    pushGtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    })
    pushGtag("config", "G-HQF9CZ8HER", { send_page_view: false })
    sendPageView()
  }, [pushGtag, sendPageView])

  const handleConsent = (value: "accepted" | "rejected") => {
    storeConsent(value)
  }

  useEffect(() => {
    if (consent === "accepted" && !hasSentInitialPageView.current) {
      grantConsent()
      hasSentInitialPageView.current = true
    }
  }, [consent, grantConsent])

  useEffect(() => {
    if (consent !== "accepted") return

    const handleRouteChange = () => {
      sendPageView()
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [consent, router.events, sendPageView])

  return (
    <div className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable} ${inter.className}`}>
      <Script
        id="ahrefs-analytics"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="xxvM7kuGS/Qg1K4VAPJsOg"
        strategy="lazyOnload"
      />
      <Layout>
        <Component {...pageProps} />
        <SpeedInsights />
      </Layout>
      {consent === null && (
        <CookieConsent
          onAccept={() => handleConsent("accepted")}
          onReject={() => handleConsent("rejected")}
        />
      )}
    </div>
  )
}
