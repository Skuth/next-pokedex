import create from "zustand";
import { persist } from "zustand/middleware";

import { IPokemon } from "../interface";

interface IFavoritesStore {
  favorites: IPokemon[];
  addFavorite: (pokemon: IPokemon) => void;
  removeFavorite: (pokemonId: string) => void;
}

const useFavorites = create(
  persist<IFavoritesStore>(
    (set, get) => ({
      favorites: [],

      addFavorite(pokemon) {
        if (get().favorites.find((item) => item.id === pokemon.id)) return;

        set((state) => ({
          favorites: [...state.favorites, pokemon],
        }));
      },
      removeFavorite(pokemonId) {
        set((state) => ({
          favorites: state.favorites.filter(
            (pokemon) => pokemon.id !== pokemonId
          ),
        }));
      },
    }),
    {
      name: "pokedex@favorites",
    }
  )
);

export { useFavorites };
