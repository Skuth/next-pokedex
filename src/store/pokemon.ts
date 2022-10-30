import create from "zustand";

import { api } from "../services";

import { IPokemon } from "../interface";

interface IPokemonStore {
  isLoading: boolean;
  pokemonList: IPokemon[];
  isActiveCardLoadgin: boolean;
  activePokemon: IPokemon;
  getPokemonList: () => Promise<void>;
  selectPokemon: (pokemon: IPokemon) => void;
  setLoading: (state: boolean) => void;
}

const usePokemon = create<IPokemonStore>((set, get) => ({
  isLoading: true,
  pokemonList: [],
  isActiveCardLoadgin: true,
  activePokemon: {} as IPokemon,

  async getPokemonList() {
    set({
      isLoading: true,
    });

    const response: IPokemon[] = await api.getPokemonList();

    set({
      isLoading: false,
      pokemonList: response || {},
    });
  },

  selectPokemon(pokemon) {
    set({
      isActiveCardLoadgin: true,
    });

    const activePokemon = pokemon || ({} as IPokemon);

    set({
      activePokemon,
    });

    setTimeout(() => {
      set({
        isActiveCardLoadgin: false,
      });
    }, 250);
  },

  setLoading(state) {
    set({
      isLoading: state,
      isActiveCardLoadgin: state,
    });
  },
}));

export { usePokemon };
