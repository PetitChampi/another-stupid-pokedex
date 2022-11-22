import "./404.styles.scss";

import { Link } from "react-router-dom";

function ErrorView() {
  return (
    <div className="error">
      <h1 className="error_title">404</h1>
      <h2 className="error_subtitle">you got lost</h2>
      <div className="error_cta">
        go back&nbsp;
        <Link to={"/"}>
          <span className="error_cta_link">home</span>
        </Link>
      </div>
    </div>
  );
}

export default ErrorView;