import MainNav from "../components/MainNav";

import styles from "./Error.module.css";

import batImg from "../assets/images/sad.jpg";

function Error() {
  return (
    <>
      <MainNav />
      <div className={styles.container}>
        <div className={styles.leftError}>
          <h3>404 - ERROR</h3>
          <p>Sorry, page not found</p>
        </div>
        <div className={styles.rightError}>
          <img src={batImg} alt="batman"></img>
        </div>
      </div>
    </>
  );
}

export default Error;
