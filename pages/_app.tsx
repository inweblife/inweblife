import Layout from '../components/Layout'
import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <SpeedInsights />
    </Layout>
  )
}
