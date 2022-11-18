import "./cardGrid.styles.scss";

import Card from "../card/card.component";
import Pagination from "../pagination/pagination.component";

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
      {paginated && <Pagination />}
    </>
  );
}

export default CardGrid;