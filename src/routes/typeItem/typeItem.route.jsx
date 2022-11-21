import CardGrid from "../../components/cardGrid/cardGrid.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";

import { useParams } from "react-router-dom";

function TypeItemView() {
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

  return (
    <>
      <h1 className="page-title">{typeName} type pokemon</h1>
      <Breadcrumbs pathList={pathList} />
      <CardGrid 
        size={"sm"}
        paginated
        paginationActions={{ prev: null, next: null }}
        cardsData={[]}
      />
    </>
  );
}

export default TypeItemView;