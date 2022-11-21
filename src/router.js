import AllPokemonView from "./routes/allPokemon/allPokemon.route";
import TypesView from "./routes/types/types.route";
import TypeItemView from "./routes/typeItem/typeItem.route";
import GensView from "./routes/gens/gens.route";
import GenItemView from "./routes/genItem/genItem.route";
import PokemonItemView from "./routes/pokemonItem/pokemonItem.route";
import ErrorView from "./routes/404/404.route";

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
      <Route path="*" element={<ErrorView />} />
      <Route path="/" element={<AllPokemonView />} />
      <Route path="/types" element={<TypesView />} />
      <Route path="/types/:typeName" element={<TypeItemView />} />
      <Route path="/gens" element={<GensView />} />
      <Route path="/gens/:genNumber" element={<GenItemView />} />
      {[
        "/pokemon/:pokemonName",
        "/types/:typeName/:pokemonName",
        "/gens/:genNumber/:pokemonName",
      ].map((path, index) => {
        return <Route path={path} element={<PokemonItemView />} key={index} />;
      })}
    </Route>
  )
);

export default router;