import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

interface FetchPokemon {
  count: number;
  next: string;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export const fetchPokemon = (offset: number) =>
  instance.get<FetchPokemon>(`pokemon?offset=${offset}&limit=100`);

export default instance;
