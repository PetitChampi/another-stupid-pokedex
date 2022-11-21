import CardGrid from "../../components/cardGrid/cardGrid.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";

import { useSelector, useDispatch } from 'react-redux';
import { getPokemonByGen } from "../../store/pokemonSlice";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

function TypeItemView() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.pokemon);

  const { genNumber } = useParams();

  const pathList = [
    {
      name: "gens",
      path: "/gens",
    },
    {
      name: `gen ${genNumber}`,
    },
  ]

  const cardsData = pokemons.map(poke => {
    return {
      name: poke.name,
      link: `/gens/${genNumber}/${poke.name}`,
    }
  }).slice(0, 18);

  useEffect(() => {
    dispatch(getPokemonByGen(genNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="page-title">gen {genNumber} pokemon</h1>
      <Breadcrumbs pathList={pathList} />
      <CardGrid size={"sm"} paginated cardsData={cardsData} />
    </>
  );
}

export default TypeItemView;