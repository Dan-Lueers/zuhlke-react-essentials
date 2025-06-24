import { Layout } from "./Layout";
import { MainMenu } from "./MainMenu";
import { NameInput } from "./NameInput";
import { PokeList } from "./PokeList";

export function ListPage() {
  return (
    <>
      <Layout>
        <MainMenu />
        <NameInput />
        <PokeList />
      </Layout>
    </>
  );
}
