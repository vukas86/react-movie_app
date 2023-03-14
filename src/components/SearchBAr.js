import React, { useContext } from "react";
import { MovieContext } from "../../src/store/MovieContext";

// const api = "https://www.omdbapi.com/?";
// const apiKey = "apikey=560c873c";

function SearchBar() {
  const [movie, setMovie] = useContext(MovieContext);

  async function handleSearch(e) {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=560c873c" +
          `&s=${e.target.value}` +
          "&type=movie" +
          "&page=1"
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
          placeholder="Search for Movie or Show"
          onChange={handleSearch}
        ></input>
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
