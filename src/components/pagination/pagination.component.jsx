import "./pagination.styles.scss";

import NavigationButton from "../navigationButton/navigationButton.component";

function Pagination() {
  return (
    <div className="pagination">
      <NavigationButton direction={"previous"} />
      <NavigationButton direction={"next"} />
    </div>
  );
}

export default Pagination;