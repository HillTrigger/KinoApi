// import { getMovies } from "./getMovies";

export async function showMovies(DATA) {
  const moviesEl = document.querySelector(".movies");
  moviesEl.innerHTML = "";
  DATA.items.forEach((film) => {
    const movieEl = document.createElement("div");

    let genres = film.genres
      .map((el) => {
        return el.genre;
      })
      .join(", ");

    let getRatingClass = () => {
      if (film.ratingKinopoisk >= 8) {
        return "movie__inner--green";
      } else if (film.ratingKinopoisk >= 5) {
        return "movie__inner--yellow";
      } else {
        return "movie__inner--red";
      }
    };

    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <div class="movie__inner ${getRatingClass()}" data-rating="${
      film.ratingKinopoisk
    }">
      <img
            src=${film.posterUrl}
            alt=${film.nameRu}
            class="movie__image"
          />
          <div class="movie__info">
            <h2 class="movie__title">${film.nameRu}</h2>
            <p class="movie__category">${genres}</p>
          </div>
      </div>      
    `;

    moviesEl.append(movieEl);
  });
}