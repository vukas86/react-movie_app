import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./Pagination.module.css";

function Pagination() {
  const { currentPage } = useSelector((store) => store.pagination);
  console.log(currentPage);

  const prevPageHandler = () => {
    // if (currentPage === 1) return;
    // setCurrentPage(currentPage--);
    console.log(currentPage);
  };
  const nextPageHandler = () => {
    // if (currentPage === 5) return;
    // setCurrentPage(currentPage++);
    console.log(currentPage);
  };
  return (
    <div className={styles.paginCont}>
      <ul>
        <li>
          <button className={styles.btnPag} onClick={prevPageHandler}>
            Prev
          </button>
        </li>

        <li>
          <NavLink className={currentPage === 1 ? "activePage" : null}>
            1
          </NavLink>
        </li>
        <li>
          <NavLink className={currentPage === 2 ? "activePage" : null}>
            2
          </NavLink>
        </li>
        <li>
          <NavLink className={currentPage === 3 ? "activePage" : null}>
            3
          </NavLink>
        </li>
        <li>
          <NavLink className={currentPage === 4 ? "activePage" : null}>
            4
          </NavLink>
        </li>
        <li>
          <NavLink className={currentPage === 5 ? "activePage" : null}>
            5
          </NavLink>
        </li>

        <li>
          <button className={styles.btnPag} onClick={nextPageHandler}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
