import { useNavigate } from "react-router-dom";
import styles from "./DetailsPage.module.css";

function CloseBtn() {
  const navigate = useNavigate();

  return (
    <button
      className={styles.closeBtn}
      onClick={() => navigate(-1)}
      title="Go back to movies"
    >
      X
    </button>
  );
}

export default CloseBtn;
