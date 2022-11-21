import CardGrid from "../../components/cardGrid/cardGrid.component";

import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemon } from "../../store/pokemonSlice";
import { useEffect } from "react";

function AllPokemonView() {
  const dispatch = useDispatch();
  const { pokemons, pagination } = useSelector((state) => state.pokemon);

  const cardsData = pokemons.map(poke => {
    return {
      name: poke.name,
      link: `/pokemon/${poke.name}`,
    }
  })

  const paginationActions = () => {
    const prev = pagination.prev ? () => dispatch(getAllPokemon(pagination.prev)) : null;
    const next = pagination.next ? () => dispatch(getAllPokemon(pagination.next)) : null;
    return { prev, next };
  }

  useEffect(() => {
    dispatch(getAllPokemon());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="page-title">all pokemon</h1>
      <CardGrid
        size={"sm"} 
        cardsData={cardsData}
        paginated
        paginationActions={paginationActions()}
      />
    </>
  );
}

export default AllPokemonView;