import "./App.css";

import { MainMenu } from "./components/mainMenu";
import { Layout } from "./components/Layout";
import { PokeList } from "./components/pokeList";

function App() {
  return (
    <>
      <Layout>
        <MainMenu />
        <PokeList />
      </Layout>
    </>
  );
}

export default App;
