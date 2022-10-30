import React, { useCallback, useEffect } from 'react';

import { BaseContainer, ConditionContainer, Shimmer } from '../../atoms';
import { Paginate } from '../../molecules';
import { PokemonCard, PokemonActiveCard } from '../../organisms';

import { Container, PokemonContainer, ActivePokemonContainer } from './styles';

import { usePokemon } from '../../../store/pokemon';

const Home: React.FC = () => {
  const [isLoading, pokemonList, total, isActiveCardLoadgin, selectPokemon, getPokemonList] = usePokemon(state => [
    state.isLoading,
    state.pokemonList,
    state.total,
    state.isActiveCardLoadgin,
    state.selectPokemon,
    state.getPokemonList
  ])

  const handlePaginate = useCallback((page: number) => {
    getPokemonList(page)

    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }, [getPokemonList])

  useEffect(() => {
    if (!pokemonList.length) return

    selectPokemon(pokemonList[0])
  }, [pokemonList, selectPokemon])

  return (
    <BaseContainer>
      <Container>
        <PokemonContainer>
          <ConditionContainer if={isLoading}>
            {Array(15).fill(null).map((_, idx) => (
              <Shimmer key={idx} width="100%" height="200px" />
            ))}
          </ConditionContainer>

          <ConditionContainer if={!isLoading}>
            <>
              {pokemonList.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </>
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

        <ConditionContainer if={total > 0}>
          <Paginate
            currentPage={1}
            total={total}
            perPage={15}
            onPaginate={handlePaginate}
          />
        </ConditionContainer>
      </Container>
    </BaseContainer >
  )
}

export default Home;