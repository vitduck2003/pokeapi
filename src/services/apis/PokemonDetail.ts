import axios from 'axios';
import { API_URL } from '../../constants/apiConstants';

const PokemonDetailApi = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        const data = response.data;
        const pokemon = {
            id: data.id,
            name: data.name,
            hp: data.stats.find((stat: any) => stat.stat.name === 'hp').base_stat,
            atk: data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
            def: data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
            spa: data.stats.find((stat: any) => stat.stat.name === 'special-attack').base_stat,
            spd: data.stats.find((stat: any) => stat.stat.name === 'special-defense').base_stat,
            speed: data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
            weight: data.weight,
            height: data.height,
            types: data.types.map((type: any) => type.type.name),
            sprites: {
                // front_default: data.sprites.front_default,
                versions: {
                    'generation-v': {
                        'black-white': {
                            animated: {
                                front_default: data.sprites.versions['generation-v']['black-white'].animated.front_default,
                            },
                        },
                    },
                },
            },
        };
        return pokemon;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default PokemonDetailApi;