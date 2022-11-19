import CardGrid from "../../components/cardGrid/cardGrid.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";

function TypeItemView() {
  const pathList = [
    {
      name: "types",
      path: "/types",
    },
    {
      name: "water",
    },
  ]

  return (
    <>
      <h1 className="page-title">water type pokemon</h1>
      <Breadcrumbs pathList={pathList} />
      <CardGrid size={"sm"} paginated />
    </>
  );
}

export default TypeItemView;