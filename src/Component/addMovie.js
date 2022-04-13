import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../Movies/MoviesContext";
import { getAllGenres } from "./utils";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { v4 as uuid } from "uuid";
import { useFetch } from "../Movies/fetch";

export function AddMovie() {
  const { movies, setMovies } = useContext(MoviesContext);
  const genres = [...getAllGenres(movies)];
  const [Loading, setLoading] = useState(false);

  let navigator = useNavigate();
  function ReturnHome() {
    navigator("/");
  }

  function HandleSubmit(ev) {
    ev.preventDefault();
    const addMov = {
      id: uuid(),
      title: ev.target.title.value,
      overview: ev.target.overview.value,
      release_date: ev.target.release_date.value,
      poster: ev.target.poster.value,
      genres: getSelectedValues(ev.target.genres),
    };
    setLoading(true);

    fetch(`http://localhost:5000/Movies/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(addMov),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => setMovies([...movies, data]))
      .then((e) => ReturnHome())
      .finally(() => setLoading(false));
  }

  if (Loading) {
    return (
      <div>
        <p>Loading ....</p>
      </div>
    );
  }

  return (
    <section>
      <form className="form" action="" onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="title">
            title :{" "}
            <input type="text" placeholder="title" id="title" name="title" />
          </label>
        </div>
        <div>
          <label htmlFor="overview">
            overview :{" "}
            <textarea
              name="overview"
              id="overview"
              cols="30"
              rows="10"
            ></textarea>
          </label>
        </div>
        <div>
          <label htmlFor="DateInp">
            <input type="date" name="release_date" id="DateInp" />
          </label>
        </div>
        <div>
          <label htmlFor="posterInp">
            poster : <input type="text" name="Poster" id="poster" />
          </label>
        </div>
        <div>
          <label htmlFor="Category">
            <select name="genres" id="Category" multiple>
              {genres.map((e) => (
                <option value="">{e}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </section>
  );

  function getSelectedValues(field) {
    const selectedOpts = [...field.options]
      .filter((x) => x.selected)
      .map((o) => o.value);
    return selectedOpts;
  }
}

export default AddMovie;