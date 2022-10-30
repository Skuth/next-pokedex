import React, { useEffect } from 'react';

import { BaseContainer, ConditionContainer, Shimmer } from '../../atoms';
import { PokemonCard, PokemonActiveCard } from '../../organisms';

import { Container, PokemonContainer, ActivePokemonContainer } from './styles';

import { usePokemon } from '../../../store/pokemon';

const Home: React.FC = () => {
  const [isLoading, pokemonList, isActiveCardLoadgin, selectPokemon] = usePokemon(state => [
    state.isLoading,
    state.pokemonList,
    state.isActiveCardLoadgin,
    state.selectPokemon
  ])

  useEffect(() => {
    if (!pokemonList.length) return

    selectPokemon(pokemonList[0])
  }, [pokemonList, selectPokemon])

  return (
    <BaseContainer>
      <Container>
        <PokemonContainer>
          <ConditionContainer if={isLoading}>
            {Array(16).fill(null).map((_, idx) => (
              <Shimmer key={idx} width="100%" height="200px" />
            ))}
          </ConditionContainer>

          <ConditionContainer if={!isLoading}>
            {pokemonList.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </ConditionContainer>
        </PokemonContainer>

        <ActivePokemonContainer>
          <ConditionContainer if={isActiveCardLoadgin}>
            <Shimmer width="100%" height="100%" />
          </ConditionContainer>

          <ConditionContainer if={!isActiveCardLoadgin}>
            <PokemonActiveCard />
          </ConditionContainer>
        </ActivePokemonContainer>
      </Container>
    </BaseContainer >
  )
}

export default Home;