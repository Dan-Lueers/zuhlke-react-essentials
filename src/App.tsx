import "./App.css";

import { MainMenu } from "./components/MainMenu";
import { Layout } from "./components/Layout";
import { PokeList } from "./components/PokeList";

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
