import React, { useEffect } from 'react';

import { BaseContainer, ConditionContainer, Shimmer } from '../../atoms';
import { PokemonCard, PokemonActiveCard } from '../../organisms';

import { Container, PokemonContainer, ActivePokemonContainer, EmptyContainer } from './styles';

import { usePokemon } from '../../../hooks/pokemon';
import { useFavorites } from '../../../store/favorites';

const Favorites: React.FC = () => {
  const { isActiveCardLoadgin, selectPokemon } = usePokemon()
  const pokemonList = useFavorites(state => state.favorites)

  useEffect(() => {
    if (!pokemonList.length) return

    selectPokemon(pokemonList[0].id)
  }, [pokemonList, selectPokemon])

  return (
    <BaseContainer>
      <Container>
        <ConditionContainer if={pokemonList.length > 0}>
          <PokemonContainer>
            {pokemonList.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </PokemonContainer>

          <ActivePokemonContainer>
            <ConditionContainer if={isActiveCardLoadgin}>
              <Shimmer width="100%" height="100%" />
            </ConditionContainer>

            <ConditionContainer if={!isActiveCardLoadgin}>
              <PokemonActiveCard />
            </ConditionContainer>
          </ActivePokemonContainer>
        </ConditionContainer>

        <ConditionContainer if={pokemonList.length <= 0}>
          <EmptyContainer>
            <h2>Opss!</h2>
            <span>Parece que ainda não tem nada por aqui</span>
          </EmptyContainer>
        </ConditionContainer>
      </Container>
    </BaseContainer >
  )
}

export default Favorites;