import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Home of the best movies</h1>
          <p className={styles.btn}>
            <Link to="movies" className={styles.btnRed}>
              See Movies
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
