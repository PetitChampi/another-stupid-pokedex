import "./navigationButton.styles.scss";

function NavigationButton({ direction, action, disabled }) {
  return (
    <div className="button_container">
      <div className={`navigation_button ${disabled && "disabled"}`} onClick={action}>
        <span className={
          `navigation_button_arrow
          ${direction === "previous" && "left"}
          ${direction === "next" && "right"}`
        }>
          &uArr;
        </span>
      </div>
      <span className="navigation_button_text">
        {direction}
      </span>
    </div>
  );
}

export default NavigationButton;