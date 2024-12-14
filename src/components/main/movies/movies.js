import "./modal/modal"; //логика модального окна

import { getMovies } from "./js/getMovies";
// import "./js/handleSearchInput";
import { handleSearchInput } from "./js/handleSearchInput";

import { showMovies } from "./js/showMovies";
import top250films from "@/assests/jsons/topFilmBd.json";
import { pagination } from "./js/pagination";

window.addEventListener("DOMContentLoaded", () => {
  const formSearchEl = document.querySelector(".header__form");
  formSearchEl.addEventListener("submit", handleSearchInput);

  // getMovies()
  //   .then((data) => {
  //     if (data.message) {
  //       alert(data.message);
  //       return;
  //     }
  //     showMovies(data);
  //   })
  //   .catch((err) => console.log(err));
  pagination(top250films);
});
