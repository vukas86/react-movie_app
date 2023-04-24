import { removeFromFavorites } from "../redux/features/pagination/paginationSlice";
import styles from "./UserList.module.css";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  const { favorites } = useSelector((store) => store.pagination);
  const dispatch = useDispatch();

  const itemRemoveHandler = (index) => {
    dispatch(removeFromFavorites(favorites.filter((_, i) => i !== index)));
  };
  return (
    <>
      <div className="moviesContainer">
        <div className="cards">
          {favorites.length > 0 && Array.isArray(favorites) ? (
            favorites.map((listItem, index) => (
              <div key={listItem.imdbID || listItem.id}>
                <div className={styles.oneMovie}>
                  <img
                    src={listItem.Poster || listItem.imgPath}
                    alt={listItem.Title || listItem.title}
                    onError={(e) =>
                      (e.target.onerror = null)(
                        (e.target.src =
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?202009121220190")
                      )
                    }
                  />
                  <div>
                    <h3>{listItem.Title || listItem.title}</h3>
                  </div>
                  <div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => itemRemoveHandler(index)}
                    >
                      Remove from favorites
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className={styles.bigTitle}>You dont have favorites!</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default UserList;
