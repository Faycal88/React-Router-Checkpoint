import "./main.css";
import ShowMovies from "./movies_list";
import { Routes, Route } from "react-router-dom";
import { MoviesProvider } from "./MoviesContext";
import Search from "./filter";
import Hot from "./Hot";
import MovieDetails from "./MovieDetails";
import { AddMovie } from "../Component/addMovie";


  

export default function Main(obj) {
  return (
    <MoviesProvider>
      <div className="Contain">
        <Routes>
          <Route path="/" element={<Hot />}></Route>
          <Route path="/Showtime" element={<ShowMovies />}></Route>
          <Route path={`/?mov=${Search}`} element={<ShowMovies />} ></Route>
          <Route path="Showtime/:MovieId" element={<MovieDetails />} ></Route>
          <Route path="//:MovieId" element={<MovieDetails />} ></Route>
          <Route path="/request" element={<AddMovie />} ></Route>
        </Routes>
      </div>
    </MoviesProvider>
  );
}
