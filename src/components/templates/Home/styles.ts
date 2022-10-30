import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  align-items: flex-start;

  padding: 4rem 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    padding: 8rem 0;
  }
`;

export const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 4rem 2rem;
`;

export const ActivePokemonContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;

  top: 4rem;

  width: 100%;
  height: calc(100vh - 4rem - 4rem - 90px);

  > div {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
