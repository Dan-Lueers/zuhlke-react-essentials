import "./App.css";

import { MainMenu } from "./components/MainMenu";
import { Layout } from "./components/Layout";
import { PokeList } from "./components/PokeList";
import { NameInput } from "./components/NameInput";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ListPage } from "./components/ListPage";
import { DetailPage } from "./components/DetailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  { path: "/", element: <ListPage /> },
  { path: "/pokemon/:pokeName", element: <DetailPage /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
