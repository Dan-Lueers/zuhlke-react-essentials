import { useParams } from "react-router";
import { pokeDetails } from "../mockData/details";
import { Layout } from "./Layout";
import { useQuery } from "@tanstack/react-query";

export async function fetcher<T>(uri: string): Promise<T> {
  const response = await fetch(uri);
  if (!response.ok) throw new Error("Could not fetch data!");
  return response.json();
}

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};

type PokemonBase = {
  name: string;
};

export type PokemonDetailDto = PokemonBase & {
  sprites: {
    front_shiny: string;
  };
  stats: Stat[];
};

export function DetailPage() {
  const { pokeName } = useParams<"pokeName">();
  //   const pokemon = pokeDetails.find((poke) => poke.name === pokeName);
  const { data } = useQuery({
    queryKey: ["pokelist"],
    queryFn: () =>
      fetcher<PokemonDetailDto>(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      ),
  });
  return (
    <Layout>
      <h1>{data?.name}</h1>
      <img src={data?.sprites.front_shiny} />
    </Layout>
  );
}
