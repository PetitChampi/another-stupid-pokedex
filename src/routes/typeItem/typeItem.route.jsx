import CardGrid from "../../components/cardGrid/cardGrid.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";

import { useSelector, useDispatch } from 'react-redux';
import { getPokemonByType } from "../../store/pokemonSlice";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

function TypeItemView() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.pokemon);

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

  const cardsData = pokemons.map(item => {
    return {
      name: item.pokemon.name,
      link: `/types/${typeName}/${item.pokemon.name}`,
    }
  }).slice(0, 18);

  useEffect(() => {
    dispatch(getPokemonByType(typeName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="page-title">{typeName} type pokemon</h1>
      <Breadcrumbs pathList={pathList} />
      <CardGrid 
        size={"sm"}
        paginated
        paginationActions={{ prev: null, next: null }}
        cardsData={cardsData}
      />
    </>
  );
}

export default TypeItemView;