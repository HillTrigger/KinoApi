import { KEY, URL } from "./constans";

export async function getMovies() {
  try {
    const resp = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": KEY,
      },
    });
    const respData = await resp.json();
    return respData;
  } catch (error) {
    console.log("Ошибка получения фильмов: ", error); //TODO сделать всплывающее окно
  }
}
