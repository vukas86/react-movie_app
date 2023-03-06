import { useLoaderData } from "react-router-dom";

import styles from "./Movies.module.css";
import moviePoster from "../assets/images/avenger.jpg";

function Movies() {
  const movies = useLoaderData();

  console.log(movies);
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

// const API_KEY = "560c873c";

export const moviesLoader = async () => {
  const res = await fetch(
    "http://www.omdbapi.com/?s=inception&apikey=560c873c"
  );

  return res.json();
};
