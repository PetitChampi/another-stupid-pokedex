import CardGrid from "../../components/cardGrid/cardGrid.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import Loader from "../../components/loader/loader.component";

import { useSelector, useDispatch } from 'react-redux';
import { getPokemonByType } from "../../store/pokemonSlice";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

function TypeItemView() {
  const dispatch = useDispatch();
  const { pokemonsByType, loading } = useSelector((state) => state.pokemon);

  const { typeName } = useParams();

  const pathList = [
    {
      name: "types",
      path: "/types",
    },
    {
      name: typeName,
    },
  ]

  useEffect(() => {
    dispatch(getPokemonByType(typeName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardsData = pokemonsByType.map(item => {
    return {
      name: item.pokemon.name,
      link: `/types/${typeName}/${item.pokemon.name}`,
    }
  }).slice(0, 18);

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
          paginationActions={{ prev: null, next: null }}
          cardsData={cardsData}
        />
      }
    </>
  );
}

export default TypeItemView;