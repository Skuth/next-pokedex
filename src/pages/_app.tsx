import { useEffect } from "react"
import Head from "next/head"
import { AppProps } from "next/app"

import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../styles/globals"
import { theme } from "../styles/Theme"

import { Navbar } from "../components/organisms"

import { usePokemon } from "../store/pokemon"

import { api } from "../services"

import { IPokemon } from "../interface"

interface AppPropsInterface extends AppProps {
  pokemonList: IPokemon[]
}

const App = ({ Component, pageProps, pokemonList }: AppPropsInterface) => {
  const setPokemonList = usePokemon(state => state.setPokemonList)

  useEffect(() => {
    if (!pokemonList.length) return

    setPokemonList(pokemonList)
  }, [pokemonList, setPokemonList])

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

      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.getInitialProps = async (): Promise<{ pokemonList: IPokemon[] }> => {
  const response = await api.getPokemonList()

  return {
    pokemonList: response || []
  }
}

export default App