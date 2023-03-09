import { useRouteError } from "react-router-dom";

import MainNav from "../components/MainNav";

import styles from "./Error.module.css";

import batImg from "../assets/images/sad.jpg";

function Error() {
  const error = useRouteError();

  let title;
  let message = "Something went wrong!";

  if (error.status === 500) {
    title = 500;
    message = error.data.message;
  }
  if (error.status === 404) {
    title = 404;
    message = "Sorry, page not found";
  }

  return (
    <>
      <MainNav />
      <div className={styles.container}>
        <div className={styles.leftError}>
          <h3>{title} - ERROR</h3>
          <p>{message}</p>
        </div>
        <div className={styles.rightError}>
          <img src={batImg} alt="batman"></img>
        </div>
      </div>
    </>
  );
}

export default Error;
