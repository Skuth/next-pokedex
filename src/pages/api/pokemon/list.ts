import type { NextApiRequest, NextApiResponse } from "next";

import { pokemonTypeColors } from "../../../data";

import { IPokemon } from "../../../interface";
import { ApiResponse } from "../../../interface/api";

const api = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<"pokemon", IPokemon[]>>
) => {
  const page = Number(req.query.page ?? 1);
  const paginate = Number(req.query.paginate ?? 16);

  const apiUrl =
    "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json";
  const response = await fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      res.map((pokemon: IPokemon) => {
        pokemon.id = String(pokemon.id).padStart(3, "0");

        pokemon.type = pokemon.type.map((type) => {
          const pokemonType = String(
            type
          ).toLowerCase() as keyof typeof pokemonTypeColors;

          return {
            text: String(type),
            color:
              pokemonTypeColors[pokemonType] || pokemonTypeColors["normal"],
          };
        });

        pokemon.image = {
          image: `https://github.com/fanzeyi/pokemon.json/blob/master/images/${pokemon.id}.png?raw=true`,
          sprit: `https://github.com/fanzeyi/pokemon.json/blob/master/sprites/${pokemon.id}MS.png?raw=true`,
          thumbnail: `https://github.com/fanzeyi/pokemon.json/blob/master/thumbnails/${pokemon.id}.png?raw=true`,
        };

        return pokemon;
      });

      return res;
    })
    .catch(() => ({} as IPokemon[]));

  const total = response?.length || 0;

  const start = (page - 1) * paginate;
  const end = page * paginate;

  const nextPage = Math.ceil(total / paginate);

  res.status(200).json({
    total,
    hasNextPage: nextPage > page,
    hasPrevPage: page > 1,
    pokemon: response.slice(start, end),
  });
};

export default api;
