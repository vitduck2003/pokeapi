import axios from "axios";
import { DataPokemon, PaginationParams } from "../../types/interface";
import { API_URL } from "../../constants/apiConstants";
const getPokemonData = async (params: PaginationParams) => {
  const res = await axios.get(`${API_URL}?limit=${params.limit}&offset=${params.offset}`);
    const dataPokemon: DataPokemon[] = [];
    for (const pokemon of res.data.results) {
        const poke = await axios.get(pokemon.url);
         dataPokemon.push(poke.data);
    }
    const infoPromises = dataPokemon.map((data) => {
        return axios.get(`${API_URL}/${data.name}`); 
    });
    const infoPokemons = await Promise.all(infoPromises);

    return infoPokemons.map((response) => response.data);
};

export default getPokemonData;