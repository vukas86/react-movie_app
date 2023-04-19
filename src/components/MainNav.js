import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBAr";
import styles from "./MainNav.module.css";
import hamLogo from "../assets/logos/menu-2.svg";
import logoImage from "../assets/logos/logo_white.png";
import { useState } from "react";

function MainNav() {
  const [hamMenu, setHamMenu] = useState(false);

  const toggleMenu = () => {
    setHamMenu(!hamMenu);
  };

  return (
    <div className="root-layout">
      <header>
        <div className="logo">
          <NavLink to="/">
            <img src={logoImage} alt="logo" className={styles.logoImg}></img>
          </NavLink>
        </div>
        <SearchBar />
        <nav className={styles.navBar}>
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
        <span>
          <img
            src={hamLogo}
            alt="logo"
            className={styles.hamLogo}
            onClick={toggleMenu}
          ></img>
        </span>
      </header>
    </div>
  );
}

export default MainNav;
