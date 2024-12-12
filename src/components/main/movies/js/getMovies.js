import { KEY, URL } from "./constans";
import testData from '@/assests/jsons/topFilmBd.json';

export async function getMovies() {
  try {
    // const resp = await fetch(URL, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-API-KEY": KEY,
    //   },
    // });
    // let respData = await resp.json();
    let respData = testData;
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
