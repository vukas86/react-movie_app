import { useContext } from "react";
import { useLoaderData, Link, json } from "react-router-dom";

import styles from "./Movies.module.css";
import { MovieContext } from "../store/MovieContext";

function Movies() {
  const movies = useLoaderData();

  const [movie, setMovie] = useContext(MovieContext);

  return (
    <>
      <div className={styles.moviesContainer}>
        <div className={styles.cards}>
          {Array.isArray(movie)
            ? movie.map((movie) => (
                <Link
                  to={movie.imdbID.toString()}
                  key={movie.imdbID}
                  className={styles.card}
                >
                  <div className={styles.card}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className={styles.posterImg}
                      onError={(e) =>
                        (e.target.onerror = null)(
                          (e.target.src =
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?202009121220190")
                        )
                      }
                    />
                    <div className={styles.info}>
                      <h3>{movie.Title}</h3>
                      <h4>{movie.Year}</h4>
                      <p>{movie.imdbID}</p>
                    </div>
                  </div>
                </Link>
              ))
            : null}
        </div>
      </div>
      {/* <div className={styles.moviesContainer}>
        <div className={styles.cards}>
          {movies.Search.map((movie) => (
            <Link
              to={movie.imdbID.toString()}
              key={movie.imdbID}
              className={styles.card}
            >
              <div className={styles.card}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className={styles.posterImg}
                  onError={(e) =>
                    (e.target.onerror = null)(
                      (e.target.src =
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?202009121220190")
                    )
                  }
                />
                <div className={styles.info}>
                  <h3>{movie.Title}</h3>
                  <h4>{movie.Year}</h4>
                  <p>{movie.imdbID}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default Movies;

// const API_KEY = "560c873c";

export const moviesLoader = async () => {
  const res = await fetch(
    "http://www.omdbapi.com/?s=inception&apikey=560c873c"
  );

  if (!res.ok) {
    throw json(
      { message: "Could not feth movies!" },
      {
        status: 500,
      }
    );
  } else {
    return res;
  }
};
