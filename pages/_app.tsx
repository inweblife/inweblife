import Layout from '../components/Layout'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Space_Grotesk } from "next/font/google"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-body",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-brand",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className}`}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </Layout>
    </div>
  )
}
