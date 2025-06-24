import "./App.css";

import { MainMenu } from "./components/MainMenu";
import { Layout } from "./components/Layout";
import { PokeList } from "./components/PokeList";
import { NameInput } from "./components/NameInput";

function App() {
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

export default App;
