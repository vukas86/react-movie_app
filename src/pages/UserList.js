import { useContext } from "react";
import { MovieContext } from "../store/MovieContext";
import styles from "./UserList.module.css";

function UserList() {
  const { userList, setUserList } = useContext(MovieContext);

  const itemRemoveHandler = (index) => {
    const newList = userList.filter((_, i) => i !== index);

    setUserList(newList);
  };
  return (
    <>
      <div className="moviesContainer">
        <div className="cards">
          {userList.length > 0 && Array.isArray(userList) ? (
            userList.map((listItem, index) => (
              <div key={listItem.imdbID}>
                <div className={styles.oneMovie}>
                  <img
                    src={listItem.Poster}
                    alt={listItem.Title}
                    onError={(e) =>
                      (e.target.onerror = null)(
                        (e.target.src =
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?202009121220190")
                      )
                    }
                  />
                  <div>
                    <h3>{listItem.Title}</h3>
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
            <h1>You dont have favorites!</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default UserList;
