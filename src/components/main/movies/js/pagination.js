import { showMovies } from "./showMovies";

export const pagination = (data) => {
  let films = data.items; //массив фильмов
  let filmCount = 4; //количество карт на странице
  let currentPage = 1; //текущая страница
  let pagesCount = null; //вынесли pagesCount из остальных функций для удобства

  const filmsContainer = document.querySelector(".movies__films"); //куда добавлять карты
  const paginatinon = document.querySelector(".pagination"); //наш pagination с классом --hidden

  const renderFilms = (films, container, numberOfFilms, page) => {
    container.innerHtml = ""; //при каждом рендере очищаем предыдущий результат

    const firstFilmIndex = numberOfFilms * page - numberOfFilms; // первый индекс массива текущей страницы

    const lastFilmIndex = firstFilmIndex + numberOfFilms; // последний индекс массива текущей страницы

    const filmsOnPage = films.slice(firstFilmIndex, lastFilmIndex); // с помощью полученных индексов создаём новый массив

    showMovies(filmsOnPage); //полученный массив добавляем на страницу
  };

  const renderPagination = (films, filmCount) => {
    pagesCount = Math.ceil(films.length / filmCount); //считаем сколько всего страниц в массиве

    paginatinon.querySelector(".pagination__counter").textContent = // записываем на pagination текущую страницу и сколько всего
      currentPage + "/" + pagesCount;

    paginatinon.classList.remove("pagination--hidden"); // убираем класс hidden
  };

  const updatePagination = () => {
    paginatinon.replaceWith(paginatinon.cloneNode(true)); //создаём клон pagination чтобы обновить обработчики на нём
    const newPagination = document.querySelector(".pagination");

    //добавляем на него обработчик нажатия по кнопкам
    newPagination.addEventListener("click", (e) => {
      if (e.target.closest(".pagination__btn-left")) {
        if (currentPage <= 1) return; //если нажата левая кнопка то счётчик уменьшается на 1 если уже не 1
        currentPage--;
        renderFilms(films, filmsContainer, filmCount, currentPage); //заного рендерем фильмы с новыми данными

        newPagination.querySelector(".pagination__counter").textContent = // записываем на pagination текущую страницу и сколько всего
          currentPage + "/" + pagesCount;

        return;
      }
      if (e.target.closest(".pagination__btn-right")) {
        if (currentPage >= pagesCount) return; //если нажата правая кнопка то счётчик увеличивается на 1 если уже не pagesCount
        currentPage++;
        renderFilms(films, filmsContainer, filmCount, currentPage); //заного рендерем фильмы с новыми данными

        newPagination.querySelector(".pagination__counter").textContent = // записываем на pagination текущую страницу и сколько всего
          currentPage + "/" + pagesCount;

        return;
      }
    });
  };

  renderFilms(films, filmsContainer, filmCount, currentPage); //добавление карт на страницу с учетом текущей страницы
  renderPagination(films, filmCount); //рендер pagination, считаем сколько страниц всего и убираем класс --hidden
  updatePagination(); //обновление pagination и его обработчиков, чтобы они брали новый массив из замыкания а не старый
  return;
};
