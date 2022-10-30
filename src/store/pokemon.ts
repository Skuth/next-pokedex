import create from "zustand";

import { api } from "../services";

import { IPokemon } from "../interface";

interface IPokemonStore {
  isLoading: boolean;
  pokemonList: IPokemon[];
  total: number;
  hastNextPage: boolean;
  hasPrevPage: boolean;

  isActiveCardLoadgin: boolean;
  activePokemon: IPokemon;

  getPokemonList: (page?: number, paginate?: number) => Promise<void>;
  selectPokemon: (pokemon: IPokemon) => void;
  setLoading: (state: boolean) => void;
}

const usePokemon = create<IPokemonStore>((set, get) => ({
  isLoading: true,
  pokemonList: [],
  total: 0,
  hastNextPage: false,
  hasPrevPage: false,

  isActiveCardLoadgin: true,
  activePokemon: {} as IPokemon,

  async getPokemonList(page = 1, paginate = 15) {
    set({
      isLoading: true,
    });

    const response = await api.getPokemonList({
      page,
      paginate,
    });

    if (!response) return;

    set({
      isLoading: false,
      pokemonList: response?.pokemon || [],
      total: response?.total || 0,
      hastNextPage: response?.hasNextPage || false,
      hasPrevPage: response?.hasPrevPage || false,
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
