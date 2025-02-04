import { NavLink } from "react-router-dom"
import "../Header.css"

function Header() {
  return (
    <header class="Navbar">
      <div class="Nav-container">
        <div class="Logo">
        <NavLink to="/"> Manav Jain </NavLink>
        </div>
        <ul class="Nav-links">
          <li class="link">
            <NavLink to="/" class="Nav-content"> Home </NavLink>
          </li>
          <li class="link">
            <NavLink to="/About" class="Nav-content"> About </NavLink>
          </li>
          <li class="link">
            <NavLink to="/Projects" class="Nav-content"> Portfolio </NavLink>
          </li>
          <li class="link">
            <NavLink to="/Contact" class="Nav-content"> Contact </NavLink>
          </li>
        </ul>
      </div>
    </header>

  )
}

export default Header