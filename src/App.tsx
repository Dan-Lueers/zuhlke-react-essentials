import "./App.css";

import { MainMenu } from "./components/MainMenu";
import { Layout } from "./components/Layout";
import { PokeList } from "./components/PokeList";
import { NameInput } from "./components/NameInput";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ListPage } from "./components/ListPage";
import { DetailPage } from "./components/DetailPage";

const router = createBrowserRouter([
  { path: "/", element: <ListPage /> },
  { path: "/pokemon/:pokeName", element: <DetailPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
