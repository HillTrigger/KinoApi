// import { getMovies } from "./getMovies";

import { showModal } from "../modal/js/showModal";
export async function showMovies(DATA) {
  const moviesEl = document.querySelector(".movies__films");
  const wrapper = document.createDocumentFragment(); //обёртка чтобы предотвратить частые обновления DOM
  // const wrapper = document.createElement("div");
  // wrapper.classList.add("movies__films");
  moviesEl.innerHTML = ""; //очистка прошлого запроса

  DATA = DATA.items.forEach((film, index) => {
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
    movieEl.addEventListener("click", () =>
      showModal({ id: film.kinopoiskId, genres })
    );
    console.log(index)
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
