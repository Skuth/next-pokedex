import { useEffect } from "react";
import { NextPage } from "next";

import { HomeTemplate } from "../components/templates";

import { usePokemon } from "../store/pokemon";

const Home: NextPage = () => {
  const getPokemonList = usePokemon(state => state.getPokemonList)

  useEffect(() => {
    getPokemonList()
  }, [getPokemonList])

  return <HomeTemplate />
}
export default Home;
