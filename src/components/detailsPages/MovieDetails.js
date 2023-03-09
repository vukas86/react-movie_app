import { useLoaderData, json } from "react-router-dom";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const movie = useLoaderData();
  console.log(movie);

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailImg}>
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
        </div>
        <div className={styles.info}>
          <div>
            <h2>{movie.Title}</h2>
            <h3>Relesed Year: {movie.Year}</h3>
            <h3>Genre: {movie.Genre}</h3>
          </div>

          <p>{movie.Plot}</p>
          <div>
            <button className={styles.detailBtn}>
              Add to favorites &#x2764;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;

export async function movieDetailsLoader({ request, params }) {
  const id = params.id;
  const res = await fetch(
    "https://www.omdbapi.com/?apikey=560c873c" + `&i=${id}`
  );
  console.log(res);

  if (!res.ok) {
    throw json(
      { message: "Could not fetch details for selected show" },
      { status: 500 }
    );
  } else {
    return res;
  }
}
