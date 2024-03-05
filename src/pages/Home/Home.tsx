import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import getPokemonData from '../../services/apis/PokemonApi';
import { DataPokemon, DetailProps } from '../../types/interface';
import { searchPokemonData } from '../../services/apis/PokemonSearch';
import { CardListPokemon } from '../../components/CardListPokemon';
import PokemonDetail from '../../components/PokemonDetail';
import PokemonDetailApi from '../../services/apis/PokemonDetail';


const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState<DataPokemon[]>([]);
  const [originalData, setOriginalData] = useState<DataPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [dataDetail, setDataDetail] = useState<DetailProps | null>();
  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await getPokemonData();
      setPokemonData(data);
      setOriginalData(data);
      setLoading(false);
    };

    fetchPokemonData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (event.target.value === '') {
      setPokemonData(originalData);
    }
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await searchPokemonData(searchTerm);
    setPokemonData(data);
  };

  const openModal = async (id) => {
    try {
      const data = await PokemonDetailApi(id);
      console.log(data);
      setDataDetail(data);
    } catch (error) {
      console.error(error);
    }
    setShowModal(true);
  };
  
  const closeModal = async () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white mx-6">
      <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-center items-center mb-6">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search pokemon"
              value={searchTerm}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button type="submit" className="bg-indigo-500 rounded-md px-3 py-2 ml-2 text-white">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        {loading ? (
          <h1 className="flex justify-center align-center">Loading...</h1>
        ) : pokemonData.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <CardListPokemon pokemons={pokemonData} onClick={openModal} />
          </div>
        ) : (
          <h1 className="text-center font-bold text-red-500">Khong tim thay con pokemon ban can </h1>
        )}
      </div>
      {showModal && <PokemonDetail pokemon={dataDetail} closeModal={closeModal}  />}
    </div>
  );
};

export default Home;