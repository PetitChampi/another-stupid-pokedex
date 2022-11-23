import CardGrid from "../../components/cardGrid/cardGrid.component";
import Loader from "../../components/loader/loader.component";

import { useSelector, useDispatch } from 'react-redux';
import { getTypes } from "../../store/typesSlice";
import { useEffect } from "react";

function TypesView() {
  const dispatch = useDispatch();
  const { typesData, loading } = useSelector((state) => state.types);

  const cardsData = typesData
    .filter(type => type.name !== "shadow" && type.name !== "unknown")
    .map(type => {
      return {
        name: type.name,
        link: `/types/${type.name}`,
        singlePokeData: {
          // TODO fetch single type + add url for single type first pokemon
          key: "https://pokeapi.co/api/v2/pokemon/ditto",
          keyType: "url",
        },
      }
    });

  useEffect(() => {
    dispatch(getTypes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="page-title">what's your type?</h1>
      {loading ?
        <div className="loader_container">
          <Loader />
        </div>
      :
        <CardGrid
          size={"sm"}
          cardsType={"category"}
          cardsData={cardsData}
        />
      }
    </>
  );
}

export default TypesView;