import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Brainn.co - Loteria</title>
        <link
          rel="shortcut icon"
          href="https://brainn.co/favicon-darkmode.ico"
        />
        <link
          rel="apple-touch-icon"
          href="https://brainn.co/favicon-darkmode.ico"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta name="theme-color" content={theme.colors.mainBg} />
        <meta name="description" content="Challenger from Brainn" />
      </Head>
      <GlobalStyles />
      <NextNprogress startPosition={0.3} stopDelayMs={200} height={5} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
