import { useState, createContext } from "react";

export const PaginationContext = createContext();

export const PaginationProvider = (props) => {
  const pageNumberLimit = 5;
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(3);
  const [maxPageLimit, setMaxPage] = useState(5);
  const [minPageLimit, setMinPage] = useState(0);

  return (
    <PaginationContext.Provider
      value={{
        pageNumberLimit,
        movieData,
        setMovieData,
        loading,
        setLoading,
        currentPage,
        setCurrentPage,
        maxPageLimit,
        setMaxPage,
        minPageLimit,
        setMinPage,
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
};
