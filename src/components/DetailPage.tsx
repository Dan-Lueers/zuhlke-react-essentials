import { useParams } from "react-router";
import { pokeDetails } from "../mockData/details";
import { Layout } from "./Layout";

export function DetailPage() {
  const { pokeName } = useParams<"pokeName">();
  const pokemon = pokeDetails.find((poke) => poke.name === pokeName);
  return (
    <Layout>
      <h1>{pokemon?.name}</h1>

      <img
        src={
          pokeDetails.find((poke) => poke.name === pokeName)?.sprites
            .front_shiny
        }
      ></img>
    </Layout>
  );
}
