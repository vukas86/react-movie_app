import { useLoaderData, json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToFavorites } from "../../redux/features/pagination/paginationSlice";

import CloseBtn from "./CloseBtn";
import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const show = useLoaderData();
  const dispatch = useDispatch();

  const { favorites } = useSelector((store) => store.pagination);

  const addToListHandler = () => {
    const addFav = favorites.find((fav) => fav.id === show.id);
    if (!addFav) {
      dispatch(addToFavorites(show));
    } else {
      return alert("Show already added");
    }
  };

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailImg}>
          <img src={show.imgPath} alt={show.title} />
        </div>
        <div className={styles.info}>
          <div>
            <h2>{show.title}</h2>
            <h3>
              Released Year: <span>{show.year}</span>
            </h3>
            <h4>
              Rating: <span>{show.rating}</span> / 10
            </h4>
          </div>

          <p>{show.description}</p>
          <button className={styles.detailBtn} onClick={addToListHandler}>
            Add to my list &#x2764;
          </button>
        </div>
        <div>
          <CloseBtn />
        </div>
      </div>
    </>
  );
}

export default DetailsPage;

export async function showDetailsloader({ request, params }) {
  const id = params.id;
  const res = await fetch("http://localhost:8000/shows/" + id);
  if (!res.ok) {
    throw json(
      { message: "Could not fetch details for selected show" },
      { status: 500 }
    );
  } else {
    return res;
  }
}
