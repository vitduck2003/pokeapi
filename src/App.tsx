import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardListPokemon';
import Header from './layouts/Header/Header';
interface PokemonProps {
  name: string;
  url: string;
}
interface Pokemon {
  id: number;
  name: string;
  sprites: {
  front_default: string;
  };
}
const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30")
      res.data.results.forEach(async(pokemon:PokemonProps) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        setPokemon((p) => [...p, poke.data])
      });
    };
    getPokemon();
  }, [])
  return (
    <div className="container">
      <h1 className="text-red-500">Hahahaha</h1>
    </div>
  )
}

export default App
