import { useEffect } from 'react';
import { NextPage } from 'next';

import { FavoritesTemplate } from '../../components/templates';

import { usePokemon } from '../../store/pokemon';

const Favorites: NextPage = () => {
  const setLoading = usePokemon(state => state.setLoading)

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  return <FavoritesTemplate />
}

export default Favorites;