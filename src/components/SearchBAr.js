import React, { useState, useEffect } from "react";

const api = "https://www.omdbapi.com/?";
const apiKey = "apikey=560c873c";

function SearchBar() {
  const [movieName, setMovieName] = useState("");

  const url =
    "https://www.omdbapi.com/?apikey=560c873c" +
    `&s=${movieName}` +
    "&type=movie" +
    "&page=1";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <div>
        <form>
          <div className="searchBar">
            <label htmlFor="name"></label>
            <input
              type="search"
              name="name"
              placeholder="movie name"
              onChange={(e) => setMovieName(e.target.value)}
            />
            <button type="submit" onClick={(e) => handleSearch(e)}>
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;

// export const searchLoader = async () => {
//   const res = await fetch(
//     "https://www.omdbapi.com/?apikey=560c873c" + `&s=${movieName}`
//   );
// };
