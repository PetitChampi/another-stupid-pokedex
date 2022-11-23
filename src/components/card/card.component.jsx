import "./card.styles.scss";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getIndividualPokemon } from "../../store/singlePokeSlice";
import { useEffect } from "react";

function Card({ categoryCard, cardTitle, cardLink, singlePokeData }) {
  const dispatch = useDispatch();
  const { individualPokemon } = useSelector((state) => state.singlePoke);

  useEffect(() => {
    dispatch(getIndividualPokemon({
      pokeKey: "https://pokeapi.co/api/v2/pokemon/bulbasaur",
      keyType: "url",
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cardImgUrl = individualPokemon && individualPokemon.sprites.front_default;

  return (
    <Link to={cardLink}>
      <div className="card">
        <img src={cardImgUrl} alt={cardTitle} className="card_img" />
        <span className={
          `card_title
          ${categoryCard && "category"}`
        }>
          {cardTitle}
        </span>
      </div>
    </Link>
  );
}

export default Card;