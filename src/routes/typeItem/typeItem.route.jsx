import CardGrid from "../../components/cardGrid/cardGrid.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import Loader from "../../components/loader/loader.component";

import { useSelector, useDispatch } from 'react-redux';
import { getPokemonByType } from "../../store/pokeListSlice";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function TypeItemView() {
  const dispatch = useDispatch();
  const { pokemonsByType, loading } = useSelector((state) => state.pokeList);

  const { typeName } = useParams();

  const [page, setPage] = useState(1);
  const pathList = [
    {
      name: "types",
      path: "/types",
    },
    {
      name: typeName,
    },
  ];

  useEffect(() => {
    dispatch(getPokemonByType(typeName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardsData = pokemonsByType.map(item => {
    return {
      name: item.pokemon.name,
      link: `/types/${typeName}/${item.pokemon.name}`,
      singlePokeData: {
        // TODO send single poke data asynchronously
        key: "https://pokeapi.co/api/v2/pokemon/ditto",
        keyType: "url",
      },
    }
  }).slice((page - 1) * 18, page * 18);

  const paginationActions = {
    prev: page > 1 ? () => setPage(prevPage => prevPage - 1) : null,
    next: (page * 18) < pokemonsByType.length ? () => setPage(prevPage => prevPage + 1) : null,
  }

  return (
    <>
      <h1 className="page-title">{typeName} type pokemon</h1>
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