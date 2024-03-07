
export interface Pokemons {
  name: string;
  url: string;
}
export interface DataPokemon extends Pokemons {
  id: number;
  weight: string | number;
  height: string | number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string
    };
  }[];
}
// export interface PokemonDetail extends DataPokemon {
//   hp: number;
// }
// export interface PokemonDetail {
//     id: number;
//     name: string;
//     weight: string | number;
//     height: string | number;
//     sprites: {
//       front_default: string;
//     };
//     types: {
//       type: { 
//         name: string
//     };
//     }[];
//   }
export interface DetailProps {
  id: number;
  name: string;
  hp: number;
  def: number;
  atk: number;
  spd: number;
  spa: number;
  speed: number;
  weight: number;
  height: number;
  types: string[];
  sprites: {
    front_default: string;
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}
export interface ColorByType {
  [key: string]: string;
}

export interface PaginationParams {
  limit: number;
  offset: number;
}
