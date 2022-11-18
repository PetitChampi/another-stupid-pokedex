import AllPokemonView from "./routes/allPokemon/allPokemon.route";
import TypesView from "./routes/types/types.route";
import GensView from "./routes/gens/gens.route";

import Navbar from "./components/navbar/navbar.component";
import { createBrowserRouter, Route, Outlet, createRoutesFromElements } from "react-router-dom";

const AppLayout = () => (
  <>
    <Navbar />
    <main className="main">
      <Outlet />
    </main>
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<AllPokemonView />} />
      <Route path="/types" element={<TypesView />} />
      <Route path="/gens" element={<GensView />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AllPokemonView />,
//   },
//   {
//     path: "types",
//     element: <TypesView />,
//   },
//   {
//     path: "gens",
//     element: <GensView />,
//   },
// ]);

export default router;