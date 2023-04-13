import { createSlice } from "@reduxjs/toolkit";
import bestMovies from "../../../initialMovieData";

const initialState = {
  movieData: bestMovies,
  searchResults: [],
  loading: true,
  currentPage: 1,
  maxPageLimit: 5,
  minPageLimit: 0,
  isLoading: true,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
});

// console.log(paginationSlice);

export default paginationSlice.reducer;
