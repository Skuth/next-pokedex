import { IPokemon } from "../interface";

const getPokemonList = async (): Promise<IPokemon[]> => {
  const response: IPokemon[] = await fetch(
    "/api/pokemon/list?page=1&paginate=100"
  )
    .then((res) => res.json())
    .catch(() => []);

  return response;
};

const api = {
  getPokemonList,
};

export default api;
