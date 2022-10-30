import React from 'react';

import { PokemonProvider } from "./pokemon"

interface AppProviderProps {
  children?: React.ReactElement | React.ReactElement[]
}

const AppProvider: React.FC<AppProviderProps> = ({
  children = undefined
}) => {
  return (
    <PokemonProvider>
      <div>
        {children}
      </div>
    </PokemonProvider>
  )
}

export { AppProvider };