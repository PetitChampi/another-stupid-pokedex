import CardGrid from "../../components/cardGrid/cardGrid.component";

import { useSelector, useDispatch } from 'react-redux';
import { getGens } from "../../store/generationsSlice";
import { useEffect } from "react";

function GensView() {
  const dispatch = useDispatch();
  const { gensData } = useSelector((state) => state.generations)

  const cardsData = gensData.map(gen => {
    return {
      name: gen.name,
      link: `/generation/${gen.name}`,
    }
  })

  useEffect(() => {
    dispatch(getGens());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="page-title">clash of the generations</h1>
      <CardGrid size={"lg"} cardsType={"category"} cardsData={cardsData} />
    </>
  );
}

export default GensView;