import CardGrid from "../../components/cardGrid/cardGrid.component";
import Loader from "../../components/loader/loader.component";

import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemon } from "../../store/pokeListSlice";
import { useEffect } from "react";

function AllPokemonView() {
  const dispatch = useDispatch();
  const { pokemons, pagination, loading } = useSelector((state) => state.pokeList);

  const cardsData = pokemons.map(poke => {
    return {
      name: poke.name,
      link: `/pokemon/${poke.name}`,
      singlePokeData: {
        key: poke.name,
        keyType: "name",
      },
    }
  });

  const paginationActions = {
    prev: pagination.prev ? () => dispatch(getAllPokemon(pagination.prev)) : null,
    next: pagination.next ? () => dispatch(getAllPokemon(pagination.next)) : null,
  };

  useEffect(() => {
    dispatch(getAllPokemon());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="page-title">all pokemon</h1>
      {loading ?
        <div className="loader_container">
          <Loader />
        </div>
      :
        <CardGrid
          size={"sm"} 
          cardsData={cardsData}
          paginated
          paginationActions={paginationActions}
        />
      }
    </>
  );
}

export default AllPokemonView;