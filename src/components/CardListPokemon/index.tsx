import React from 'react';
import colorByType from "../../constants/MyColor";
import { DataPokemon } from '../../types/interface';

interface CardListPokemonProps {
  pokemons: DataPokemon[];
  onClick: (id: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const CardListPokemon: React.FC<CardListPokemonProps> = ({ pokemons, onClick }) => {
  return (
    <>
      {pokemons.map((pokemon: DataPokemon) => (
        <div key={pokemon.id} className="cursor-pointer rounded-lg group shadow-lg shadow-gray-500/100" onClick={(event) => onClick(pokemon.id, event)}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <div className="flex justify-between p-2">
              <button className="bg-yellow-500 rounded-full p-2 m-1">#{pokemon.id}</button>
            </div>
            <img
              src={pokemon.sprites.front_default}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              alt={pokemon.name}
            />
          </div>
          <div className="flex justify-around mt-6">
            <p className="text-blue-300">Weight: {pokemon.weight}kg</p>
            <p className="text-red-300">Height: {pokemon.height}m</p>
          </div>
          <p className="uppercase font-bold mt-4 text-lg font-medium text-gray-900 text-center">
            {pokemon.name}
          </p>
          <div className="mx-auto mb-4 flex justify-center">
            {pokemon.types.map((type) => {
              const typeName = type.type.name;
              const color = colorByType[typeName as keyof typeof colorByType];
              return (
                <button
                  className={`mt-3 p-2 mr-2 ${color} hover:bg-green-600 rounded-lg capitalize`}
                  key={typeName}
                >
                  {typeName}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};