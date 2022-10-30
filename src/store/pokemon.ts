import create from "zustand";

import { IPokemon } from "../interface";

interface IPokemonStore {
  isLoading: boolean;
  pokemonList: IPokemon[];
  isActiveCardLoadgin: boolean;
  activePokemon: IPokemon;
  setPokemonList: (pokemonList: IPokemon[]) => void;
  selectPokemon: (id: string) => void;
}

const usePokemon = create<IPokemonStore>((set, get) => ({
  isLoading: true,
  pokemonList: [],
  isActiveCardLoadgin: true,
  activePokemon: {} as IPokemon,

  setPokemonList(pokemonList) {
    set({
      pokemonList,
      isLoading: false,
      isActiveCardLoadgin: false,
    });
  },

  selectPokemon(pokemonId) {
    if (!get().pokemonList.length) return;
    if (get().isActiveCardLoadgin) return;

    set({
      isActiveCardLoadgin: true,
    });

    const activePokemon =
      get().pokemonList.find((pokemon) => pokemon.id === pokemonId) ||
      ({} as IPokemon);

    set({
      activePokemon,
    });

    setTimeout(() => {
      set({
        isActiveCardLoadgin: false,
      });
    }, 250);
  },
}));

export { usePokemon };
