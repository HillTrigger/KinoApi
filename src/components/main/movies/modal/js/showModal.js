import { closeModal } from "./closeModal";

export function showModal({ id, name, genres, image, url }) {
  try {
    const moviesEl = document.querySelector(".movies");
    let modal = document.createElement("div");
    modal.className = "movies__modal modal";
    modal.innerHTML = `<div class="modal__content">
  <img
    class="modal__image"
    src=${image}
    alt="Кинопоиск: Гид по аниме"
  />
  <h3 class="modal__name">${name}</h3>
  <span class="modal__category">${genres}</span>
  <p class="modal__description">
    От Миядзаки до «Евангелиона». Разбор самого важного, что надо
    знать о японской анимации.
  </p>
  <a class="modal__href" target="_blank" href=${url}
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
