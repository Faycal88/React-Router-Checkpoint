export function IsinCategory(movie, genre) {
    return movie.genres.includes(genre);
  }
  
  export function getAllGenres(movie) {
    const genres = new Set();
    movie.forEach((mov) => {
      mov.genres.forEach((genre) => {
        genres.add(genre);
      });
    });
    return genres;
  }
  