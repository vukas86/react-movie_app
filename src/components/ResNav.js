import { NavLink } from "react-router-dom";
import styles from "./ResNav.module.css";

function ResNav() {
  return (
    <nav className={styles.menuBar}>
      <li>
        <NavLink
          to="/"
          //   className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="shows">Shows</NavLink>
      </li>
      <li>
        <NavLink to="myList">User Lists</NavLink>
      </li>
    </nav>
  );
}

export default ResNav;
