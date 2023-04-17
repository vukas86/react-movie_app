import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./Pagination.module.css";
import {
  changeCurrentPage,
  nextPage,
  prevPage,
} from "../../redux/features/pagination/paginationSlice";

function Pagination() {
  const dispatch = useDispatch();

  const { currentPage } = useSelector((store) => store.pagination);
  const { pageNumber } = useSelector((store) => store.pagination);

  const modifyCurrentPageHandler = (e) => {
    e.preventDefault();
    if (e.target.textContent === "Prev" && currentPage !== 1) {
      return dispatch(prevPage());
    }
    if (e.target.textContent === "Next" && currentPage !== 5) {
      return dispatch(nextPage());
    }
  };

  const selectedNumberHandler = (e) => {
    e.preventDefault();
    dispatch(changeCurrentPage(parseInt(e.target.textContent)));
  };

  return (
    <div className={styles.paginCont}>
      <ul>
        <li>
          <button className={styles.btnPag} onClick={modifyCurrentPageHandler}>
            Prev
          </button>
        </li>
        {pageNumber.map((num) => (
          <li key={num}>
            <NavLink
              className={currentPage === num ? "activePage" : null}
              onClick={selectedNumberHandler}
            >
              {num}
            </NavLink>
          </li>
        ))}

        <li>
          <button className={styles.btnPag} onClick={modifyCurrentPageHandler}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
