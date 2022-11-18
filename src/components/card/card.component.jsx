import "./card.styles.scss";

function Card({ categoryCard }) {
  return (
    <div className="card">
      <img src="" alt="card img" className="card_img" />
      <span className={
        `card_title
        ${categoryCard && "category"}`
      }>
        card name
      </span>
    </div>
  );
}

export default Card;