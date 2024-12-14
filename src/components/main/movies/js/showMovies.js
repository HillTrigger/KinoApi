// import { getMovies } from "./getMovies";

import { showModal } from "../modal/js/showModal";
export async function showMovies(films) {
  const moviesEl = document.querySelector(".movies__films");
  const wrapper = document.createDocumentFragment(); //обёртка чтобы предотвратить частые обновления DOM
  // const wrapper = document.createElement("div");
  // wrapper.classList.add("movies__films");
  moviesEl.innerHTML = ""; //очистка прошлого запроса

  films.forEach((film, index) => {
    const movieEl = document.createElement("div");

    let genres = film.genres
      .map((el) => {
        return el.genre;
      })
      .join(", ");

    let getRatingClass = () => {
      if (film.ratingKinopoisk >= 8) {
        return "movie--green";
      } else if (film.ratingKinopoisk >= 5) {
        return "movie--yellow";
      } else {
        return "movie--red";
      }
    };
    // <div class="movie__inner ${getRatingClass()}" data-rating="${
    //   film.ratingKinopoisk
    // }">
    // movieEl.classList.add("movie");
    movieEl.className = `movie ${getRatingClass()}`;
    movieEl.dataset.rating = film.ratingKinopoisk;
    movieEl.innerHTML = `
      <img
            src=${film.posterUrl}
            alt=${film.nameRu}
            class="movie__image"
          />
            <h2 class="movie__title">${film.nameRu}</h2>
            <p class="movie__category">${genres}</p>
    `;
    movieEl.addEventListener("click", () =>
      showModal({ id: film.kinopoiskId, genres })
    );
    // console.log(index);
    wrapper.append(movieEl);
  });

  moviesEl.append(wrapper);
}

// {
//   id: film.kinopoiskId,
//   name: film.nameRu,
//   genres,
//   image: film.posterUrl,
//   url: `https://www.kinopoisk.ru/${film.type.toLowerCase()}/${
//     film.kinopoiskId
//   }/`,
// }
