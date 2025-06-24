import { useParams } from "react-router";
import { pokeDetails } from "../mockData/details";

export function DetailPage() {
  const { pokeName } = useParams<"pokeName">();
  const pokemon = pokeDetails.find((poke) => poke.name === pokeName);
  return (
    <>
      <h1>{pokemon?.name}</h1>

      <img
        src={
          pokeDetails.find((poke) => poke.name === pokeName)?.sprites
            .front_shiny
        }
      ></img>
    </>
  );
}
