import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import PokemonSpecCard from "../../components/pokemonSpecCard/pokemonSpecCard.component";
import Pagination from "../../components/pagination/pagination.component";

function PokemonItemView() {
  const pathList = [
    {
      name: "gens",
      path: "/gens",
    },
    {
      name: "gen 1",
      path: "/gens/1",
    },
    {
      name: "bulbasaur",
    },
  ]

  return (
    <>
      <h1 className="page-title">bulbasaur</h1>
      <Breadcrumbs pathList={pathList} />
      <div style={{maxWidth: "50%"}}>
        <PokemonSpecCard
          pokemonName={"bulbasaur"}
          types={["grass", "poison"]}
          weight={"69"}
          height={"7"}
        />
        <Pagination />
      </div>
    </>
  );
}

export default PokemonItemView;