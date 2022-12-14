import "./card.styles.scss";

import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getIndividualPokemon } from "../../store/singlePokeSlice";
import { useEffect, useState } from "react";

function Card({ categoryCard, cardTitle, cardLink, singlePokeData }) {
  const dispatch = useDispatch();

  const [cardImgUrl, setCardImgUrl] = useState("");

  useEffect(() => {
    dispatch(getIndividualPokemon({
      pokeKey: singlePokeData.key,
      keyType: singlePokeData.keyType,
    }))
      .then(res => setCardImgUrl(res.payload.sprites.front_default));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Link to={cardLink}>
      <div className="card">
        {cardImgUrl ?
          <img src={cardImgUrl} alt={cardTitle} />
          :
          <div className="card_nosprite">
            <span className="card_nosprite_text">no sprite</span>
          </div>
        }
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