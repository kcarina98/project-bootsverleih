import { NavLink } from "react-router-dom";
import "./css/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/boote">Boote</NavLink>
      <NavLink to="/reservierungen">Reservierungen</NavLink>
    </nav>
  );
}
