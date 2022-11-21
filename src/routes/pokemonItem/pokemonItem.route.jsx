import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import PokemonSpecCard from "../../components/pokemonSpecCard/pokemonSpecCard.component";
import Pagination from "../../components/pagination/pagination.component";

import { useParams } from "react-router-dom";

function PokemonItemView() {
  const { pokemonName } = useParams();

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
      name: pokemonName,
    },
  ]

  return (
    <>
      <h1 className="page-title">{pokemonName}</h1>
      <Breadcrumbs pathList={pathList} />
      <div style={{maxWidth: "50%"}}>
        <PokemonSpecCard
          pokemonName={pokemonName}
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