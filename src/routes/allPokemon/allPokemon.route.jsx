import CardGrid from "../../components/cardGrid/cardGrid.component";

function AllPokemonView() {
  return (
    <>
      <h1 className="page-title">all pokemon</h1>
      <CardGrid size={"sm"} paginated />
    </>
  );
}

export default AllPokemonView;