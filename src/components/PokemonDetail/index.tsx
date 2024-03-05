import React, { useState } from 'react';
import { DetailProps } from '../../types/interface';

interface ProgressBarProps {
  value: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, color }) => {
  const progressStyle = {
    width: `${value}%`,
    backgroundColor: color,
  };

  return (
    <div className="relative w-full h-6 bg-gray-200 rounded-full">
      <div className="absolute top-0 h-full rounded-full" style={progressStyle}></div>
    </div>
  );
};

interface PokeDetailProps {
  pokemon: DetailProps;
  closeModal: () => void;
}

const PokemonDetail: React.FC<PokeDetailProps> = ({ closeModal, pokemon }) => {
  const [showDetail, setShowDetail] = useState(true);
  const closeDetailHandler = () => {
    setShowDetail(false);
    closeModal();
  };

  return (
    <>
      {showDetail && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-screen h-screen max-w-screen-md">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-3xl font-semibold text-center text-blue-500">{pokemon.name}</h3>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={closeDetailHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 flex flex-col items-center space-y-4">
              <img
                src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto mb-4"
              />
              <div className="text-lg font-semibold text-indigo-600">HP</div>
              <ProgressBar value={pokemon.hp} color="indigo" />
              <div className="text-lg font-semibold text-green-600">Attack</div>
              <ProgressBar value={pokemon.atk} color="green" />
              <div className="text-lg font-semibold text-red-600">Defense</div>
              <ProgressBar value={pokemon.def} color="red" />
              <div className="text-lg font-semibold text-yellow-600">Special-Attack</div>
              <ProgressBar value={pokemon.spa} color="yellow" />
              <div className="text-lg font-semibold text-blue-600">Special-Defense</div>
              <ProgressBar value={pokemon.spd} color="blue" />
              <div className="text-lg font-semibold text-purple-600">Speed</div>
              <ProgressBar value={pokemon.speed} color="purple" />
              <p className="text-lg font-semibold">Weight: {pokemon.weight}</p>
              <p className="text-lg font-semibold">Height: {pokemon.height}</p>
              <p className="text-lg font-semibold">Type: {pokemon.types.join(', ')}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
