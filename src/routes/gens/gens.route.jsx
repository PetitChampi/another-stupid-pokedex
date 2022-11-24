import CardGrid from "../../components/cardGrid/cardGrid.component";
import Loader from "../../components/loader/loader.component";

import { useSelector, useDispatch } from 'react-redux';
import { getGens } from "../../store/generationsSlice";
import { useEffect } from "react";

function GensView() {
  const dispatch = useDispatch();
  const { gensData, loading } = useSelector((state) => state.generations);

  const cardsData = gensData.map((gen, index) => {
    return {
      name: `gen ${index + 1}`,
      link: `/gens/${index + 1}`,
      singlePokeData: {
        key: "https://pokeapi.co/api/v2/pokemon/ditto",
        keyType: "url",
      },
    }
  });

  useEffect(() => {
    dispatch(getGens());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="page-title">clash of the generations</h1>
      {loading ?
        <div className="loader_container">
          <Loader />
        </div>
      :
        <CardGrid size={"lg"} cardsType={"category"} cardsData={cardsData} />
      }
    </>
  );
}

export default GensView;