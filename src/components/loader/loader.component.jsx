import "./loader.styles.scss";

function Loader() {
  return (
    <div className="loader">
      <div className="loader_wrapper">
        <div className="loader_wrapper_wheel"></div>
        <div className="loader_wrapper_spinner"></div>
      </div>
      <span className="loader_text">loading...</span>
    </div>
  );
}

export default Loader;