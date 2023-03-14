import { useContext } from "react";
import { MovieContext } from "../../store/MovieContext";

import styles from "./DetailsPage.module.css";

function AddToListBtn(props) {
  const [userList, setUserList] = useContext(MovieContext);
  console.log(userList);

  const addToListHandler = () => {
    setUserList((prevState) => {
      return [props, ...prevState];
    });
  };
  return (
    <button className={styles.detailBtn} onClick={addToListHandler}>
      Add to my list &#x2764;
    </button>
  );
}

export default AddToListBtn;
