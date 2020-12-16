import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createStatsTemplate} from "./view/stats.js";
import {createSortTemplate} from "./view/sort.js";
import {createUserRankTemplate} from "./view/user-rank.js";
import {createFilmsTemplate} from "./view/films.js";
import {createShowMoreButtonTemplate} from "./view/show-more-btn";
import {createFilmListTemplate} from "./view/film-list.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createTopRatedFilmListTemplate} from "./view/top-rated-list.js";
import {createMostCommentedFilmListTemplate} from "./view/most-commented-list.js";
import {createFooterStatisticTemplate} from "./view/footer-statistic.js";
import {generateFilm} from "./mock/film.js";
import {generateFilter} from "./mock/filter.js";

const FILM_COUNT = 15;
const FILM_COUNT_PER_STEP = 5;
const TOP_FILM_COUNT = 2;

const films = new Array(FILM_COUNT).fill().map(generateFilm);
const filters = generateFilter(films);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterStatisticElement = document.querySelector(`.footer__statistics`);

render(siteHeaderElement, createUserRankTemplate(), `beforeend`); //отрисовка звания пользователя
render(siteMainElement, createSiteMenuTemplate(filters), `beforeend`); //отрисовка меню

const siteStatsElement = siteMainElement.querySelector(`.main-navigation`);

render(siteStatsElement, createStatsTemplate(), `beforeend`);//отрисовка статистики в меню
render(siteMainElement, createSortTemplate(), `beforeend`);//отрисовка фильтров
render(siteMainElement, createFilmsTemplate(), `beforeend`);//отрисовка главного блока фильмов
render(siteFooterStatisticElement, createFooterStatisticTemplate(), `beforeend`);//отрисовка статистика фильмов в футере

const filmsElement = siteMainElement.querySelector(`.films`);

render(filmsElement, createFilmListTemplate(), `beforeend`);//отрисовка блока, который отвечает за отображение списка фильмов

const filmListElement = filmsElement.querySelector(`.films-list`);
const filmListContainerElement = filmListElement.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
    render(filmListContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
} //отрисовка карточек с фильмами

if (films.length > FILM_COUNT_PER_STEP) {
  let renderedFilmCount = FILM_COUNT_PER_STEP;

  render(filmListElement, createShowMoreButtonTemplate(), `beforeend`);
  
  const loadMoreButton = filmListElement.querySelector(`.films-list__show-more`);
  
  loadMoreButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  films
    .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
    .forEach((film) => render(filmListContainerElement, createFilmCardTemplate(film), `beforeend`));

  renderedFilmCount += FILM_COUNT_PER_STEP;

  if (renderedFilmCount >= films.length) {
    loadMoreButton.remove();
  }
  });
}//отрисовка кнопки "показать больше"

render(filmsElement, createTopRatedFilmListTemplate(), `beforeend`);//отрисовка блока, который отвечает за отображение списка рейтинговых фильмов

const topFilmListElement = filmsElement.querySelector(`.films-list--extra`);
const topFilmListContainerElement = topFilmListElement.querySelector(`.films-list__container`);

for (let i = 0; i < TOP_FILM_COUNT; i++) {
    render(topFilmListContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
} //отрисовка карточек с рейтинговыми фильмами

render(filmsElement, createMostCommentedFilmListTemplate(), `beforeend`);//отрисовка блока, который отвечает за отображение списка просматриваемых фильмов

const commentedFilmListElement = filmsElement.querySelector(`.films-list--extra:nth-child(3)`);
const commentedFilmListContainerElement = commentedFilmListElement.querySelector(`.films-list__container`);

for (let i = 0; i < TOP_FILM_COUNT; i++) {
    render(commentedFilmListContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
} //отрисовка карточек с просматриваемыми фильмами

