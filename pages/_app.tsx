import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Layout from '../components/Layout'
import CookieConsent from '../components/CookieConsent'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Space_Grotesk, Manrope } from "next/font/google"

const COOKIE_CONSENT_KEY = "cookie-consent"

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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isDev = process.env.NODE_ENV !== "production"
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null)
  const [hasSentInitialPageView, setHasSentInitialPageView] = useState(false)

  const pushGtag = (...args: unknown[]) => {
    const win = window as any
    if (typeof win.gtag === "function") {
      win.gtag(...args)
      return
    }
    win.dataLayer = win.dataLayer || []
    win.dataLayer.push(args)
  }

  const sendPageView = () => {
    pushGtag("event", "page_view", {
      send_to: "G-HQF9CZ8HER",
      page_location: window.location.href,
      page_title: document.title,
    })
  }

  const grantConsent = () => {
    pushGtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    })
    pushGtag("config", "G-HQF9CZ8HER", { send_page_view: false })
    sendPageView()
    return true
  }

  const handleConsent = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
    setConsent(value)
    if (value === "accepted" && !hasSentInitialPageView) {
      grantConsent()
      setHasSentInitialPageView(true)
    }
  }

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored)
    }
  }, [])

  useEffect(() => {
    if (consent === "accepted" && gtagReady && !hasSentInitialPageView) {
      grantConsent()
      setHasSentInitialPageView(true)
    }
  }, [consent, gtagReady, hasSentInitialPageView])

  useEffect(() => {
    if (consent !== "accepted") return

    const handleRouteChange = () => {
      sendPageView()
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [consent, router.events])

  return (
    <div className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable} ${inter.className}`}>
      <Script
        id="ahrefs-analytics"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="xxvM7kuGS/Qg1K4VAPJsOg"
        strategy="lazyOnload"
      />
      <Script
        id="gtag-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-HQF9CZ8HER"
        strategy="beforeInteractive"
      />
      <Script id="gtag-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', 'G-HQF9CZ8HER', { send_page_view: false${isDev ? ", debug_mode: true" : ""} });
        `}
      </Script>
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
