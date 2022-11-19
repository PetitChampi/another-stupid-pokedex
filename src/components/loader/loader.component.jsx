import "./loader.styles.scss";

function Loader() {
  return (
    <div className="loader">
      <div className="loader_container">
        <div className="loader_container_wheel"></div>
        <div className="loader_container_spinner"></div>
      </div>
      <span className="loader_text">loading...</span>
    </div>
  );
}

export default Loader;