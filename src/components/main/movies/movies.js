const KEY = process.env.API_KEY;
const URL = process.env.API_URL;

async function getMovies() {
  try {
    const moviesEl = document.querySelector(".movies");
    const resp = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": KEY,
      },
    });
    const respData = await resp.json();
    return respData;
  } catch (error) {
    console.log("Ошибка получения фильмов: ", error);
  }
}

async function showMovies() {
  const moviesEl = document.querySelector(".movies");
  const DATA = await getMovies(URL);
  DATA.items.forEach((film) => {
    const movieEl = document.createElement("div");
    let genres = film.genres
      .map((el) => {
        return el.genre;
      })
      .join(", ");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <div class="movie__inner">
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
console.log(URL);
showMovies();
