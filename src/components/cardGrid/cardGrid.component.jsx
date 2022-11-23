import "./cardGrid.styles.scss";

import Card from "../card/card.component";
import Pagination from "../pagination/pagination.component";

function CardGrid({
  size,
  paginated,
  paginationActions = {prev: null, next: null},
  cardsType,
  cardsData,
}) {

  return (
    <>
      <div className={
        `card_grid
        ${size === "sm" && "sm"}
        ${size === "lg" && "lg"}`
      }>
        {cardsData.map((item, index) => {
          return (<Card 
            key={index}
            categoryCard={cardsType === "category"}
            cardTitle={item.name}
            cardLink={item.link}
            singlePokeData={item.singlePokeData}
          />)
        })}
      </div>
      {paginated && <Pagination
        nextAction={paginationActions.next}
        prevAction={paginationActions.prev}
        disabledBtns={{ prev: false, next: false }}
      />}
    </>
  );
}

export default CardGrid;