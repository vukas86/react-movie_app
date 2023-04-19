import { useLoaderData, Link, json } from "react-router-dom";

import styles from "./Movies.module.css";

function Shows() {
  const shows = useLoaderData();
  console.log(shows);
  return (
    <>
      <div className={styles.moviesContainer}>
        <div className={styles.cards}>
          {shows.map((show) => (
            <Link
              to={`/shows/${show.id}`}
              key={show.id}
              className={styles.card}
            >
              <img
                src={show.imgPath}
                alt={show.title}
                className={styles.posterImg}
                onError={(e) =>
                  (e.target.onerror = null)(
                    (e.target.src =
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?202009121220190")
                  )
                }
              />
              <div className={styles.info}>
                <h3>{show.title}</h3>
                <h4>{show.year}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shows;

export const showsLoader = async () => {
  const res = await fetch("http://localhost:8000/shows");
  if (!res.ok) {
    throw json(
      { message: "Could not load shows!" },
      {
        status: 500,
      }
    );
  } else {
    return res;
  }
};
