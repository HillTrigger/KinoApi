import { KEY } from "../../js/constans";
import { closeModal } from "./closeModal";
const URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";

export async function showModal({ id, genres }) {
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

async function getMovie(id) {
  try {
    const resp = await fetch(URL + id, {
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
