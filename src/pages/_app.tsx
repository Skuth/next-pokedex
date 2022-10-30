import { AppProps } from "next/app"
import Head from "next/head"

import { ThemeProvider } from "styled-components"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { AppProvider } from "../hooks"

import { GlobalStyle } from "../styles/globals"
import { theme } from "../styles/Theme"

import { Navbar } from "../components/organisms"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <title>Next.js - Pokedex</title>
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Navbar />
          <Component {...pageProps} />
        </AppProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
