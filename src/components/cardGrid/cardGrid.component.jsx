import "./cardGrid.styles.scss";

import Card from "../card/card.component";
import Pagination from "../pagination/pagination.component";

function CardGrid({ size, paginated, paginationActions, cardsType, cardsData }) {

  return (
    <>
      <div className={
        `card_grid
        ${size === "sm" && "sm"}
        ${size === "lg" && "lg"}`
      }>
        {cardsData.map(item => {
          return (<Card 
            key={item.name}
            categoryCard={cardsType === "category"}
            cardTitle={item.name}
            cardLink={`/pokemon/${item.name}`}
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