import { useLoaderData, json } from "react-router-dom";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const show = useLoaderData();
  console.log(show);

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailImg}>
          <img src={show.imgPath} alt="poster"></img>
        </div>
        <div className={styles.info}>
          <div>
            <h2>{show.title}</h2>
            <h3>{show.year}</h3>
          </div>

          <p>
            The trouble with computers, of course, is that they're very
            sophisticated idiots. They do exactly what you tell them at amazing
            speed. Even if you order them to kill you. So if you do happen to
            change your mind, it's very difficult to stop them from obeying the
            original order. But not impossible. Well, my Doctorate is purely
            honorary and Harry is only qualified to work on sailors. You're
            standing on my scarf. It seems you have a very large rat
            Brigadier—maybe you should employ the services of a very large cat?
          </p>
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

export async function showDetailsloader({ request, params }) {
  const id = params.id;
  const res = await fetch("http://localhost:4000/movies/" + id);
  if (!res.ok) {
    throw json(
      { message: "Could not fetch details for selected show" },
      { status: 500 }
    );
  } else {
    return res;
  }
}
