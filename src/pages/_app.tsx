import Head from "next/head"
import { AppProps } from "next/app"

import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../styles/globals"
import { theme } from "../styles/Theme"

import { Navbar } from "../components/organisms"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        <title>Next.js - Pokedex</title>
      </Head>

      <GlobalStyle />

      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App