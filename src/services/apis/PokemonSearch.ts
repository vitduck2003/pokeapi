import axios from "axios";
import { AxiosResponse } from "axios";
import { DataPokemon } from "../../types/interface";
import { API_URL } from "../../constants/apiConstants";

export const searchPokemonData = async (name: string): Promise<AxiosResponse<DataPokemon>[]> => {
  const response = await axios.get(`${API_URL}?limit=800`);
  const pokemonList = response.data.results;
  
  const filteredPokemonList = pokemonList.filter((pokemon: DataPokemon) =>
    pokemon.name.startsWith(name.toLowerCase())
  );
  
  const infoPromises = filteredPokemonList.map((pokemon: DataPokemon) =>
    axios.get(`${API_URL}/${pokemon.name}`)
  );
  
  const infoPokemons = await Promise.all(infoPromises);

  return infoPokemons.map((response) => response.data);
};