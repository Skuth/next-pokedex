import React, { createContext, useContext, useCallback, useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"

import { IPokemon } from "../interface"

interface PokemonContextData {
  isLoading: boolean
  pokemonList: IPokemon[]
  isActiveCardLoadgin: boolean
  activePokemon: IPokemon
  selectPokemon: (id: string) => void
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData)

interface PokemonProviderProps {
  children: React.ReactElement | React.ReactElement[]
}

const PokemonProvider: React.FC<PokemonProviderProps> = ({
  children = undefined
}) => {
  const { isLoading, data: pokemonList = [] } = useQuery(["pokemonList"], (): Promise<IPokemon[]> =>
    fetch("/api/pokemon/list?page=1&paginate=100")
      .then(res => res.json())
      .catch(() => ({} as IPokemon[]))
  )

  const [isActiveCardLoadgin, setActiveCardLoading] = useState<boolean>(true)
  const [activePokemon, setActivePokemon] = useState<IPokemon>({} as IPokemon)

  const selectPokemon = useCallback((pokemonId: string) => {
    setActiveCardLoading(true)

    setActivePokemon(pokemonList.find(pokemon => pokemon.id === pokemonId) || pokemonList[0])

    setTimeout(() => {
      setActiveCardLoading(false)
    }, 250)
  }, [pokemonList])

  useEffect(() => {
    if (!pokemonList?.length) return
    selectPokemon(pokemonList[0].id)
  }, [pokemonList, selectPokemon])

  return (
    <PokemonContext.Provider
      value={{
        isLoading,
        pokemonList,
        isActiveCardLoadgin,
        activePokemon,
        selectPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

const usePokemon = () => {
  const context = useContext(PokemonContext)

  if (!context) {
    throw new Error("useToast must be used within an PokemonProvider")
  }

  return context
}

export { PokemonProvider, usePokemon }