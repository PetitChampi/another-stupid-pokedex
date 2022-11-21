import CardGrid from "../../components/cardGrid/cardGrid.component";

import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemon } from "../../store/pokemonSlice";
import { useEffect } from "react";

function AllPokemonView() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getAllPokemon());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="page-title">all pokemon</h1>
      <CardGrid size={"sm"} paginated />
      {
        pokemons.map(poke => {
          return <div key={poke.name}>{poke.name}</div>
        })
      }
    </>
  );
}

export default AllPokemonView;