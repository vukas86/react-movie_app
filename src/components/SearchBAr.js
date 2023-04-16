import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../src/store/MovieContext";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBAr.module.css";
import { addSearchResults } from "../redux/features/pagination/paginationSlice";

// const api = "https://www.omdbapi.com/?";
// const apiKey = "apikey=560c873c";

function SearchBar() {
  const [query, setQuery] = useState("");
  const { movie, setMovie } = useContext(MovieContext);
  const dispatch = useDispatch();

  const { currentPage, searchResults } = useSelector(
    (store) => store.pagination
  );
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetch(
      "https://www.omdbapi.com/?apikey=560c873c" +
        `&s=${query}` +
        "&type=movie" +
        `&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(addSearchResults(data.Search));
      });
  }, [query, currentPage]);
  console.log(searchResults);

  // async function handleSearch(e) {
  //   try {
  //     const response = await fetch(
  //       "https://www.omdbapi.com/?apikey=560c873c" +
  //         `&s=${e.target.value}` +
  //         "&type=movie" +
  //         `&page=${currentPage}`
  //     );
  //     const data = await response.json();
  //     setMovie(data.Search);
  //   } catch (err) {
  //     console.error(`Something was wrong! ${err}`);
  //   }
  // }

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
