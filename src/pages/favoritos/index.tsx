import { useEffect } from 'react';
import { NextPage } from 'next';

import { FavoritesTemplate } from '../../components/templates';

import { usePokemon } from '../../store/pokemon';

const Favorites: NextPage = () => {
  const getPokemonList = usePokemon(state => state.getPokemonList)

  useEffect(() => {
    getPokemonList()
  }, [getPokemonList])

  return <FavoritesTemplate />
}

export default Favorites;