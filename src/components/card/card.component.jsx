import "./card.styles.scss";

import { Link } from "react-router-dom";

function Card({ categoryCard, cardTitle, cardImgUrl, cardLink }) {
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