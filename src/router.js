import AllPokemonView from "./routes/allPokemon/allPokemon.route";
import TypesView from "./routes/types/types.route";
import TypeItemView from "./routes/typeItem/typeItem.route";
import GensView from "./routes/gens/gens.route";
import GenItemView from "./routes/genItem/genItem.route";
import PokemonItemView from "./routes/pokemonItem/pokemonItem.route";

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
      <Route path="/types/:id" element={<TypeItemView />} />
      <Route path="/types/:id/:pokemonName" element={<PokemonItemView />} />
      <Route path="/gens" element={<GensView />} />
      <Route path="/gens/:id" element={<GenItemView />} />
      <Route path="/gens/:id/:pokemonName" element={<PokemonItemView />} />
    </Route>
  )
);

export default router;