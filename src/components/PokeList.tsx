import { useQuery } from "@tanstack/react-query";
import { pokemonList } from "../mockData/list";



// type MyComponentProps = {
//   pokemons: [];
// }

export async function fetcher<T>(uri: string): Promise<T> {
  const response = await fetch(uri);
  if (!response.ok) throw new Error('Could not fetch data!');
  return response.json();
};

export type PokemonListDto = {
  results: PokemonBase[];
};

export type PokemonDetailDto = PokemonBase & {
  sprites: {
    front_shiny: string;
  };
  stats: Stat[];
};

type PokemonBase = {
  name: string;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};

export function PokeList() {
  	const { data } = useQuery({
  queryKey: ['pokelist'], 
  queryFn: () => fetcher<PokemonListDto>('https://pokeapi.co/api/v2/pokemon?limit=23')
});
  return (
    <ul>
      {data?.results.map((item) => (
        <li key={item.name}><a href={`/pokemon/${item.name}`}>{item.name}</a></li>
      ))}
    </ul>
  );
}
