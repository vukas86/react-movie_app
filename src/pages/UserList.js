import { Link } from "react-router-dom";

import { useContext } from "react";
import { MovieContext } from "../store/MovieContext";
import Card from "../components/card/Card";

function UserList() {
  const [userList, setUserList] = useContext(MovieContext);
  console.log(userList);
  return (
    <>
      <>
        {Array.isArray(userList)
          ? userList.map((listItem) => (
              <div key={listItem.imdbID}>
                <div>
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
                </div>
              </div>
            ))
          : null}
      </>
    </>
  );
}

export default UserList;
