import { createSlice } from "@reduxjs/toolkit";
import bestMovies from "../../../initialMovieData";

const initialState = {
  movieData: bestMovies,
  searchResults: [],
  loading: true,
  currentPage: 2,
  maxPageLimit: 5,
  minPageLimit: 0,
  isLoading: true,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    prevPage: (state) => {
      state.currentPage--;
    },
    nextPage: (state) => {
      state.currentPage++;
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

// console.log(paginationSlice);
export const { prevPage, nextPage, addSearchResults } = paginationSlice.actions;

export default paginationSlice.reducer;
