import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Home of the best movies</h1>
          <div className={styles.btn}>
            <button className={styles.btnRed}>See Movies</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
