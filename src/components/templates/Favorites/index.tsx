import React, { useEffect } from 'react';

import { BaseContainer, ConditionContainer, Shimmer } from '../../atoms';
import { PokemonCard, PokemonActiveCard } from '../../organisms';

import { Container, PokemonContainer, ActivePokemonContainer, EmptyContainer } from './styles';

import { usePokemon } from '../../../store/pokemon';
import { useFavorites } from '../../../store/favorites';

const Favorites: React.FC = () => {
  const [isLoading, isActiveCardLoadgin, activePokemon, selectPokemon] = usePokemon(state => [
    state.isLoading,
    state.isActiveCardLoadgin,
    state.activePokemon,
    state.selectPokemon
  ])

  const pokemonList = useFavorites(state => state.favorites)

  useEffect(() => {
    if (!pokemonList.length) return

    selectPokemon(pokemonList[0])
  }, [pokemonList, selectPokemon])

  return (
    <BaseContainer>
      <Container>
        <ConditionContainer if={!isLoading}>
          <ConditionContainer if={pokemonList.length > 0}>
            <PokemonContainer>
              {pokemonList.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </PokemonContainer>
          </ConditionContainer>

          <ConditionContainer if={pokemonList.length <= 0}>
            <EmptyContainer>
              <h2>Opss!</h2>
              <span>Parece que ainda não tem nada por aqui</span>
            </EmptyContainer>
          </ConditionContainer>

          <ConditionContainer if={!!(!isActiveCardLoadgin && activePokemon?.id)}>
            <ActivePokemonContainer>
              <PokemonActiveCard />
            </ActivePokemonContainer>
          </ConditionContainer>
        </ConditionContainer>

        <ConditionContainer if={isLoading}>
          <PokemonContainer>
            {Array(16).fill(null).map((_, idx) => (
              <Shimmer key={idx} width="100%" height="200px" />
            ))}
          </PokemonContainer>

          <ActivePokemonContainer>
            <Shimmer width="100%" height="100%" />
          </ActivePokemonContainer>
        </ConditionContainer>
      </Container>
    </BaseContainer >
  )
}

export default Favorites;