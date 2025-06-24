import { Layout } from "./Layout";
import { NameInput } from "./NameInput";
import { PokeList } from "./PokeList";

export function ListPage() {
  return (
    <>
      <Layout>
        <NameInput />
        <PokeList />
      </Layout>
    </>
  );
}
