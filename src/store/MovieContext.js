import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movie, setMovie] = useState([]);
  const [userList, setUserList] = useState([]);

  return (
    <MovieContext.Provider value={{ movie, setMovie, userList, setUserList }}>
      {props.children}
    </MovieContext.Provider>
  );
};
