import { useParams } from "react-router-dom";

import styles from "./DetailsPage.module.css";

import poster from "../assets/images/poster.jpg";

function DetailsPage() {
  const { id } = useParams();

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailImg}>
          <img src={poster} alt="poster"></img>
        </div>
        <div className={styles.info}>
          <div>
            <h2>Movie Name</h2>
            <h3>Year</h3>
          </div>
          <p>movie id:{id}</p>

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
