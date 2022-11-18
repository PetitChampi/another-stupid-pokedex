import "./navbarLink.styles.scss";

function NavbarLink({ linkText, active }) {
  return (
    <span className={`navbar_link ${active && "active"}`}>
      {linkText}
    </span>
  );
}

export default NavbarLink;