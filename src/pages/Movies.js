import { useSelector } from "react-redux";
import { Link, json } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import styles from "./Movies.module.css";

function Movies() {
  const { movieData } = useSelector((store) => store.pagination);
  const { searchResults } = useSelector((store) => store.pagination);

  const movieInfo =
    Array.isArray(searchResults) && searchResults.length > 0
      ? searchResults
      : movieData;

  return (
    <>
      <div className="moviesContainer">
        {searchResults === undefined && (
          <h2 className={styles.title}>Our Choices of Movies</h2>
        )}

        <div className={styles.cards}>
          {movieInfo.map((movie) => (
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {Array.isArray(searchResults) && <Pagination />}
    </>
  );
}

export default Movies;

// const API_KEY = "560c873c";

export const moviesLoader = async () => {
  const res = await fetch(
    "https://www.omdbapi.com/?s=inception&apikey=560c873c"
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
