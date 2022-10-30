import axios from "axios";

import { IPokemon } from "../interface";

const url = process.env.API_URL ?? "http://localhost:3000";

const service = axios.create({
  baseURL: `${url}/api`,
});

const getPokemonList = async (): Promise<IPokemon[]> => {
  const response = await service
    .get<IPokemon[]>("pokemon/list", {
      params: {
        page: 1,
        paginate: 100,
      },
    })
    .then((res) => res.data)
    .catch(() => []);

  return response;
};

const api = {
  getPokemonList,
};

export default api;
