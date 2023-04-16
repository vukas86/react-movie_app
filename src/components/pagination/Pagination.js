import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./Pagination.module.css";
import {
  nextPage,
  prevPage,
} from "../../redux/features/pagination/paginationSlice";

function Pagination() {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((store) => store.pagination);

  const prevPageHandler = () => {
    if (currentPage === 1) return;
    dispatch(prevPage());
  };
  const nextPageHandler = () => {
    if (currentPage === 5) return;
    dispatch(nextPage());
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
