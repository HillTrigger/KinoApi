import { KEY, URL } from "./constans";
const testDATA = {
  total: 7,
  totalPages: 1,
  items: [
    {
      kinopoiskId: 263531,
      imdbId: "tt0050561",
      nameRu: "Мстители",
      nameEn: "The Avengers",
      nameOriginal: "The Avengers",
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
      ratingKinopoisk: 7.9,
      ratingImdb: 7.9,
      year: 2012,
      type: "FILM",
      posterUrl:
        "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
      posterUrlPreview:
        "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
    },
  ],
};
export async function getMovies() {
  try {
    const resp = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": KEY,
      },
    });
    let respData = await resp.json();
    if (!respData.items) {
      alert(
        "Первышено количество запросов за день. Максимум 500 запросов в день, попробуйте завтра."
      );
      respData = testDATA;
    }
    return respData;
  } catch (error) {
    console.log("Ошибка получения фильмов: ", error); //TODO сделать всплывающее окно
  }
}
