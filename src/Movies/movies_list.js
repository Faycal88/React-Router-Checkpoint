import "./cart.css";
import { Link } from "react-router-dom";
import { MoviesContext } from "./MoviesContext";
import { useContext, useState } from "react";
import Search from "./filter";
import { IsinCategory,getAllGenres } from "../Component/utils";

export default function ShowMovies() {

  const { movies, setMovies } = useContext(MoviesContext);
  const [search, setSearch] = useState(Search);
  const genres = [...getAllGenres(movies)];
  const [Category, setCategory] = useState("");

  let DisplayMovies = Category
    ? movies.filter((movie) => IsinCategory(movie, Category))
    : movies;

  if (search != null) { 
    const newlist = movies.filter((movie) => {
      return movie.title.includes(search);
    });
    return (
      <div className="contain" >
      <h1>Explore Movies</h1>
      <div>
        {genres.map((genre) => (
          <span className="tag" onClick={() => setCategory(genre)}>
            {genre}
          </span>
        ))}
      </div>
      <div>
        <h4>Movies for {Category}</h4>
      </div>
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
        </div>
    );
  }
  return (
    
    <div className="contain" >
      <h1>Explore Movies</h1>
      <div>
        {genres.map((genre) => (
          <span className="tag" onClick={() => setCategory(genre)}>
            {genre}
          </span>
        ))}
      </div>
      <div>
        <h4>Movies for {Category}</h4>
      </div>
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
    </div>
    
  );
}
