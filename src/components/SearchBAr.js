import React, { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBAr.module.css";
import { addSearchResults } from "../redux/features/pagination/paginationSlice";

// const api = "https://www.omdbapi.com/?";
// const apiKey = "apikey=560c873c";

function SearchBar() {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey);

  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const { currentPage, searchResults } = useSelector(
    (store) => store.pagination
  );
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}` +
        `&s=${query}` +
        "&type=movie" +
        `&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(addSearchResults(data.Search));
      });
  }, [query, currentPage]);

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
