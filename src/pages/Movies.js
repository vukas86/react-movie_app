import styles from "./Movies.module.css";
import moviePoster from "../assets/images/avenger.jpg";

function Movies() {
  return (
    <>
      <div className={styles.moviesContainer}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
          <div className={styles.card}>
            <img
              src={moviePoster}
              alt="movie poster"
              className={styles.posterImg}
            ></img>
            <h3>Avengers</h3>
            <h4>2004</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
