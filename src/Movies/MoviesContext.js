import { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

    return (
      <MoviesContext.Provider value={{ movies, setMovies }}>
        {children}
      </MoviesContext.Provider>
    );

  
}
