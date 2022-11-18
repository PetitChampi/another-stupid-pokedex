import CardGrid from "../../components/cardGrid/cardGrid.component";

function TypesView() {
  return (
    <>
      <h1 className="page-title">what's your type?</h1>
      <CardGrid size={"sm"} cardsType={"category"} />
    </>
  );
}

export default TypesView;