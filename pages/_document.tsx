import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const isDev = process.env.NODE_ENV !== "production"

export default function Document() {
  return (
    <Html lang="bg">
      <Head>
        <meta
          name="google-site-verification"
          content="sfRPcXRVIhRKjhZZpZq4w-Z2eWaHcXE8C-G-Ntxkrd0"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
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
      </body>
    </Html>
  )
}
