import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import PokemonSpecCard from "../../components/pokemonSpecCard/pokemonSpecCard.component";
import Pagination from "../../components/pagination/pagination.component";
import Loader from "../../components/loader/loader.component";

import { useSelector, useDispatch } from 'react-redux';
import { getIndividualPokemon } from "../../store/pokemonSlice";
import { useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";

function PokemonItemView() {
  const dispatch = useDispatch();
  const { individualPokemon, loading } = useSelector((state) => state.pokemon);

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

  useEffect(() => {
    dispatch(getIndividualPokemon(pokemonName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="page-title">{pokemonName}</h1>
      <Breadcrumbs pathList={createPathList()} />
      <div style={{maxWidth: "50%"}}>
        {loading ?
          <div className="loader_container">
            <Loader />
          </div>
        :
          (individualPokemon &&
            <div>
              <PokemonSpecCard pokemonData={individualPokemon} />
              <Pagination />
            </div>
          )
        }
      </div>
    </>
  );
}

export default PokemonItemView;