import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBAr";
import styles from "./MainNav.module.css";
import logoImage from "../assets/logos/logo_white.png";

function MainNav() {
  return (
    <div className="root-layout">
      <header>
        <div className="logo">
          <a href="/">
            <img src={logoImage} alt="logo" className={styles.logoImg}></img>
          </a>
        </div>
        <SearchBar />
        <nav>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="movies"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shows"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Tv Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mylist"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              My List
            </NavLink>
          </li>
        </nav>
      </header>
    </div>
  );
}

export default MainNav;
