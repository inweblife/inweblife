import { useEffect, useState } from "react"
import Layout from '../components/Layout'
import CookieConsent from '../components/CookieConsent'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
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
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null)

  const grantConsent = () => {
    const dataLayer = ((window as any).dataLayer = (window as any).dataLayer || [])
    dataLayer.push(["consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    }])
    dataLayer.push(["event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
    }])
  }

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored)
      if (stored === "accepted") grantConsent()
    }
  }, [])

  const handleConsent = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
    setConsent(value)
    if (value === "accepted") grantConsent()
  }

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
          gtag('config', 'G-HQF9CZ8HER');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
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
