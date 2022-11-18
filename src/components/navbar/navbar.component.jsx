import "./navbar.styles.scss";

import NavbarLink from "../navbarLink/navbarLink.component";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <span className="navbar_title">another stupid pokedex</span>
      <nav className="navbar_menu">
        <Link to={"/"}>
          <NavbarLink linkText={"all"} active={location.pathname === "/"} />
        </Link>
        <Link to={"/types"}>
          <NavbarLink linkText={"types"} active={location.pathname === "/types"} />
        </Link>
        <Link to={"/gens"}>
          <NavbarLink linkText={"gens"} active={location.pathname === "/gens"} />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;