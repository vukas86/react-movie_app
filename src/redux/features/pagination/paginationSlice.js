import { createSlice } from "@reduxjs/toolkit";
import bestMovies from "../../../initialMovieData";

const initialState = {
  movieData: bestMovies,
  searchResults: [],
  loading: true,
  pageNumber: [1, 2, 3, 4, 5],
  currentPage: 1,
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
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// console.log(paginationSlice);
export const { prevPage, nextPage, addSearchResults, changeCurrentPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
