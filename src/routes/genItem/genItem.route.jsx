import CardGrid from "../../components/cardGrid/cardGrid.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";

import { useParams } from "react-router-dom";

function TypeItemView() {
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

  return (
    <>
      <h1 className="page-title">gen {genNumber} pokemon</h1>
      <Breadcrumbs pathList={pathList} />
      <CardGrid size={"sm"} paginated cardsData={[]} />
    </>
  );
}

export default TypeItemView;