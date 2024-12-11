import "./modal/modal"; //логика модального окна

import { getMovies } from "./js/getMovies";
// import "./js/handleSearchInput";
import { handleSearchInput } from "./js/handleSearchInput";

import { showMovies } from "./js/showMovies";

const formSearchEl = document.querySelector(".header__form");
formSearchEl.addEventListener("submit", handleSearchInput);

getMovies().then(
  (data) => showMovies(data),
  (error) => console.log(error)
);
