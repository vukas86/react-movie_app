import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cards}></div>
    </div>
  );
}

export default Card;
