import Layout from '../components/Layout'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Space_Grotesk, Manrope } from "next/font/google"

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
        <Analytics />
        <SpeedInsights />
      </Layout>
    </div>
  )
}
