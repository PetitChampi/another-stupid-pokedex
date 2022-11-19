import CardGrid from "../../components/cardGrid/cardGrid.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";

function TypeItemView() {
  const pathList = [
    {
      name: "gens",
      path: "/gens",
    },
    {
      name: "gen 1",
    },
  ]

  return (
    <>
      <h1 className="page-title">gen 1 pokemon</h1>
      <Breadcrumbs pathList={pathList} />
      <CardGrid size={"sm"} paginated />
    </>
  );
}

export default TypeItemView;