import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import PokemonSpecCard from "../../components/pokemonSpecCard/pokemonSpecCard.component";
import Pagination from "../../components/pagination/pagination.component";

import { useParams, useLocation } from "react-router-dom";

function PokemonItemView() {
  const location = useLocation();
  const { pokemonName } = useParams();

  const createPathList = () => {
    const pathNames = location.pathname.split("/").slice(1)
    let totalPath = ""
    const pathValues = []
  
    pathNames
      .slice(0, pathNames.length - 1)
      .forEach(name => {
        totalPath += `/${name}`
        pathValues.push(totalPath)
      })
  
    const pathList = pathNames.map((item, index) => {
      return { name: item, path: pathValues[index] || null }
    })

    return pathList
  }

  return (
    <>
      <h1 className="page-title">{pokemonName}</h1>
      <Breadcrumbs pathList={createPathList()} />
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