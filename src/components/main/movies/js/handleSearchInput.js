import { search } from "./search";

import { showMovies } from "./showMovies";

let isLoading = false;

export async function handleSearchInput(e) {
  e.preventDefault();

  if (isLoading) {
    console.log("Запрос уже выполняется...");
    return;
  }

  isLoading = true;

  try {
    let input = e.target.children[0];
    if (!input.value) return;
    let data = await search(input.value);
    input.value = "";
    showMovies(data);
  } catch (error) {
    console.error("Ошибка:", error);
  } finally {
    isLoading = false;
  }
}
