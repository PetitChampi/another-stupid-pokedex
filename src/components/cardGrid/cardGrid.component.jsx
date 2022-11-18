import "./cardGrid.styles.scss";

import Card from "../card/card.component";
import NavigationButton from "../navigationButton/navigationButton.component";

function CardGrid({ size, paginated, cardsType }) {
  return (
    <>
      <div className={
        `card_grid
        ${size === "sm" && "sm"}
        ${size === "lg" && "lg"}`
      }>
        <Card categoryCard={cardsType === "category"} />
        <Card categoryCard={cardsType === "category"} />
        <Card categoryCard={cardsType === "category"} />
        <Card categoryCard={cardsType === "category"} />
        <Card categoryCard={cardsType === "category"} />
        <Card categoryCard={cardsType === "category"} />
        <Card categoryCard={cardsType === "category"} />
        <Card categoryCard={cardsType === "category"} />
        <Card categoryCard={cardsType === "category"} />
        <Card categoryCard={cardsType === "category"} />
      </div>
      {
        paginated &&
        <div className="pagination">
          <NavigationButton direction={"previous"} />
          <NavigationButton direction={"next"} />
        </div>
      }
    </>
  );
}

export default CardGrid;