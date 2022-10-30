import { IPokemon, ApiResponse } from "../interface";

type GetPokemonListResponse = ApiResponse<"pokemon", IPokemon[]>;

interface GetPokemonListProps {
  page?: number;
  paginate?: number;
}

const getPokemonList = async ({
  page = 1,
  paginate = 15,
}: GetPokemonListProps): Promise<GetPokemonListResponse> => {
  const response: GetPokemonListResponse = await fetch(
    `/api/pokemon/list?page=${page}&paginate=${paginate}`
  )
    .then((res) => res.json())
    .catch(() => ({} as GetPokemonListResponse));

  return response;
};

const api = {
  getPokemonList,
};

export default api;
