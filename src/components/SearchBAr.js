import React, { useContext } from "react";
import { MovieContext } from "../../src/store/MovieContext";
import { PaginationContext } from "../store/Pagination.Context";
import styles from "./SearchBAr.module.css";

// const api = "https://www.omdbapi.com/?";
// const apiKey = "apikey=560c873c";

function SearchBar() {
  const { movie, setMovie } = useContext(MovieContext);
  const { currentPage, setCurrentPage } = useContext(PaginationContext);

  async function handleSearch(e) {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=560c873c" +
          `&s=${e.target.value}` +
          "&type=movie" +
          `&page=${currentPage}`
      );
      const data = await response.json();
      setMovie(data.Search);
    } catch (err) {
      console.error(`Something was wrong! ${err}`);
    }
  }

  return (
    <>
      <div>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search..."
          onChange={handleSearch}
          className={styles.searchField}
        ></input>
      </div>
    </>
  );
}

export default SearchBar;
