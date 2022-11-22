import CardGrid from "../../components/cardGrid/cardGrid.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import Loader from "../../components/loader/loader.component";

import { useSelector, useDispatch } from 'react-redux';
import { getPokemonByGen } from "../../store/pokemonSlice";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function TypeItemView() {
  const dispatch = useDispatch();
  const { pokemons, loading } = useSelector((state) => state.pokemon);

  const { genNumber } = useParams();

  const [page, setPage] = useState(1);
  const pathList = [
    {
      name: "gens",
      path: "/gens",
    },
    {
      name: `gen ${genNumber}`,
    },
  ];

  useEffect(() => {
    dispatch(getPokemonByGen(genNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardsData = pokemons.map(poke => {
    return {
      name: poke.name,
      link: `/gens/${genNumber}/${poke.name}`,
    }
  }).slice((page - 1) * 18, page * 18);

  const paginationActions = {
    prev: page > 1 ? () => setPage(prevPage => prevPage - 1) : null,
    next: (page * 18) < pokemons.length ? () => setPage(prevPage => prevPage + 1) : null,
  }

  return (
    <>
      <h1 className="page-title">gen {genNumber} pokemon</h1>
      <Breadcrumbs pathList={pathList} />
      {loading ?
        <div className="loader_container">
          <Loader />
        </div>
      :
        <CardGrid
          size={"sm"}
          paginated
          paginationActions={paginationActions}
          cardsData={cardsData}
        />
      }
    </>
  );
}

export default TypeItemView;