import { KEY } from "../../js/constans";
import { closeModal } from "./closeModal";
const URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";

export async function showModal({ id, genres }) {
  document.body.classList.add("--scroll-hidden");
  try {
    let data = await getMovie(id);
    const moviesEl = document.querySelector(".movies");
    let modal = document.createElement("div");
    modal.className = "movies__modal modal";
    modal.innerHTML = `<div class="modal__content">
  <img
    class="modal__image"
    src=${data.posterUrl}
    alt="Кинопоиск: Гид по аниме"
  />
  <h3 class="modal__name">${data.nameRu}</h3>
  <span class="modal__category">${genres}</span>
  <p class="modal__description">${data.description}</p>
  <a class="modal__href" target="_blank" href=${data.webUrl}
    >Посетить сайт</a
  >
</div>`;

    modal.addEventListener("click", closeModal);
    moviesEl.append(modal);
  } catch (error) {
    console.log(error);
  }
  return null;
}

const testData = {
  kinopoiskId: 301,
  kinopoiskHDId: "4824a95e60a7db7e86f14137516ba590",
  imdbId: "tt0133093",
  nameRu: "Матрица",
  nameEn: "The Matrix",
  nameOriginal: "The Matrix",
  posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg",
  posterUrlPreview:
    "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
  coverUrl:
    "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig",
  logoUrl:
    "https://avatars.mds.yandex.net/get-ott/1648503/2a00000170a5418408119bc802b53a03007b/orig",
  reviewsCount: 293,
  ratingGoodReview: 88.9,
  ratingGoodReviewVoteCount: 257,
  ratingKinopoisk: 8.5,
  ratingKinopoiskVoteCount: 524108,
  ratingImdb: 8.7,
  ratingImdbVoteCount: 1729087,
  ratingFilmCritics: 7.8,
  ratingFilmCriticsVoteCount: 155,
  ratingAwait: 7.8,
  ratingAwaitCount: 2,
  ratingRfCritics: 7.8,
  ratingRfCriticsVoteCount: 31,
  webUrl: "https://www.kinopoisk.ru/film/301/",
  year: 1999,
  filmLength: 136,
  slogan: "Добро пожаловать в реальный мир",
  description: "Жизнь Томаса Андерсона разделена на две части:",
  shortDescription:
    "Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным",
  editorAnnotation:
    "Фильм доступен только на языке оригинала с русскими субтитрами",
  isTicketsAvailable: false,
  productionStatus: "POST_PRODUCTION",
  type: "FILM",
  ratingMpaa: "r",
  ratingAgeLimits: "age16",
  hasImax: false,
  has3D: false,
  lastSync: "2021-07-29T20:07:49.109817",
  countries: [
    {
      country: "США",
    },
  ],
  genres: [
    {
      genre: "фантастика",
    },
  ],
  startYear: 1996,
  endYear: 1996,
  serial: false,
  shortFilm: false,
  completed: false,
};

async function getMovie(id) {
  try {
    const resp = await fetch(URL + id, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": KEY,
      },
    });
    let respData = await resp.json();
    if (!respData.kinopoiskId) {
      respData = testData;
    }
    return respData;
  } catch (error) {
    console.log("Ошибка получения фильмов: ", error); //TODO сделать всплывающее окно
  }
}
