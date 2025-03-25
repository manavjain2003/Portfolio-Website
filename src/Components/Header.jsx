import { NavLink } from "react-router-dom";
import "../Header.css";

function Header() {
  return (
    <header className="Navbar">
      <div className="Nav-container">
        <div className="Logo">
          <NavLink to="/"> Manav Jain </NavLink>
        </div>
        <ul className="Nav-links">
          <li className="link">
            <NavLink to="/" className="Nav-content"> Home </NavLink>
          </li>
          <li className="link">
            <NavLink to="/About" className="Nav-content"> About </NavLink>
          </li>
          <li className="link">
            <NavLink to="/Projects" className="Nav-content"> Portfolio </NavLink>
          </li>
          <li className="link">
            <NavLink to="/Contact" className="Nav-content"> Contact </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;