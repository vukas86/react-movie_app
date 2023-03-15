import { useLoaderData, json } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../../store/MovieContext";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { userList, setUserList } = useContext(MovieContext);
  console.log(userList);

  const movieDetails = useLoaderData();
  console.log(movieDetails);

  const addToListHandler = () => {
    setUserList((prevState) => {
      return [movieDetails, ...prevState];
    });
    console.log("hey");
  };

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailImg}>
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
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
            <h2>{movieDetails.Title}</h2>
            <h3>Relesed Year: {movieDetails.Year}</h3>
            <h3>Genre: {movieDetails.Genre}</h3>
          </div>

          <p>{movieDetails.Plot}</p>
          <button className={styles.detailBtn} onClick={addToListHandler}>
            Add to my list &#x2764;
          </button>
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
