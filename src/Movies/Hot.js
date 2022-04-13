import "./cart.css";
import { Link } from "react-router-dom";
import { MoviesContext } from "./MoviesContext";
import { useContext, useState } from "react";
import Search from "./filter";
import { IsinCategory,getAllGenres } from "../Component/utils";

export default function ShowMovies() {
  
  const { movies, setMovies } = useContext(MoviesContext);
  const [search, setSearch] = useState(Search);
  /* const genres = [...getAllGenres(movies)]; */
  const [Category, setCategory] = useState("");

  let DisplayMovies = movies.sort((a, b) => b.likes - a.likes);
    

  if (search != null) { 
    const newlist = movies.sort((a,b) => b.likes - a.likes).filter((movie) => {
      return movie.title.includes(search);
    });
    return (
      <div className="posters">
        {newlist.map((movie) => {
                let genre= "";
                genre = movie.genres[0];
                return (
                  <div>
                    <Link to={`./${movie.id}`}>
                      <div className="moviecart" >
                        <img src={movie.poster} alt="" />
                                <p>{movie.title}</p>
                        <p>{genre} </p>
                        <p>{ movie.likes} liked this</p>
                      </div>
                    </Link>
                  </div>
                );
              
          
        })}
      </div>
    );
  }
  return (
    <div className="posters">
      {DisplayMovies.map((movie) => {
              let genre= "";
              genre = movie.genres[0];
              
              return (
                <div>
                  <Link to={`./${movie.id}`}>
                    <div className="moviecart" >
                      <img src={movie.poster} alt="" />
                              <p>{movie.title}</p>
                              <p>{genre} </p>
                              <p>{ movie.likes} liked this</p>
                    </div>
                  </Link>
                </div>
              );
            
        
      })}
      </div>
      
  );
}
