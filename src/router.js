import AllPokemonView from "./routes/allPokemon/allPokemon.route";
import TypesView from "./routes/types/types.route";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllPokemonView />,
    // loader: rootLoader,
  },
  {
    path: "types",
    element: <TypesView />,
    // loader: teamLoader,
  },
]);

export default router;