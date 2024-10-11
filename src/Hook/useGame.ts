import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
    id : number ;
    name : string;
    slug : string;
}
export interface Game {
    id: number;
    name: string;
    background_image : string ;
    parent_platforms:{platform : Platform}[]
    metacritic: number ;
  }
const useGame = (selectedGenre: Genre | null,selectedplatform : Platform | null ) => useData<Game>('/games' ,
  {params:
    {genres: selectedGenre?.id , 
     platforms : selectedplatform?.id }
  },
  [selectedGenre?.id , selectedplatform?.id])

export default useGame ;