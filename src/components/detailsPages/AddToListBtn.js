import { useContext } from "react";
import { UserListContext } from "../../store/UserListContext";

import styles from "./DetailsPage.module.css";

function AddToListBtn(props) {
  const [userList, setUserList] = useContext(UserListContext);
  console.log(userList);

  const addToListHandler = () => {
    // setUserList((prevState) => {
    //   return [user, ...prevState];
    // });
    console.log("hey");
  };
  return (
    <button className={styles.detailBtn} onClick={addToListHandler}>
      Add to my list &#x2764;
    </button>
  );
}

export default AddToListBtn;
