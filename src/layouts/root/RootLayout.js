import styles from "./RootLayout.module.css";
import logoImage from "../../assets/logos/logo_white.png";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <div className="logo">
          <a href="/">
            <img src={logoImage} alt="logo" className={styles.logoImg}></img>
          </a>
        </div>
        <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">Tv Shows</a>
          </li>
        </nav>
      </header>
    </div>
  );
}

export default RootLayout;
