import "./pagination.styles.scss";

import NavigationButton from "../navigationButton/navigationButton.component";

function Pagination({ prevAction, nextAction}) {
  return (
    <div className="pagination">
      <NavigationButton direction={"previous"} action={prevAction} disabled={!prevAction} />
      <NavigationButton direction={"next"} action={nextAction} disabled={!nextAction} />
    </div>
  );
}

export default Pagination;