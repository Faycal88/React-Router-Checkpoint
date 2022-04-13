import { useParams, useNavigate } from "react-router-dom";
import { MoviesContext } from "./MoviesContext";
import { useContext, useEffect, useState } from "react";
import { useFetch } from "./fetch";


export default function MovieDetails() {
  const { movies, setMovie } = useContext(MoviesContext);
    let params = useParams();
    let navigator = useNavigate();
    function ReturnHome() {
        navigator("./Showtime");
    }

  let mov = movies.find((movie) => movie.id == params.MovieId);
  const { MovieId } = params;


     

    
 

  function submitChanges(e) {
    e.preventDefault();
    const text = e.target.overview.value;
    fetch(`http://localhost:5000/Movies/${MovieId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        overview: text,
      }),
    }).then((data) => {});
  }

  function handleComment(e) {
    e.preventDefault();
  }

  return (
    <div>
      <img src={mov.poster} alt="" />
      <p>{mov.title}</p>
      <p>{mov.overview}</p>
      <div>
        <form action="" onSubmit={submitChanges}>
          <label htmlFor="overview"></label>
          <textarea
            name="overview"
            id="overview"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Submit Changes</button>
        </form>
      </div>
      <button onClick={ReturnHome()}>back</button>
    </div>
  );
}
