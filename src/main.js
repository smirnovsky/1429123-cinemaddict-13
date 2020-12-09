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

const FILM_COUNT = 5;
const TOP_FILM_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterStatisticElement = document.querySelector(`.footer__statistics`);

render(siteHeaderElement, createUserRankTemplate(), `beforeend`); //отрисовка звания пользователя
render(siteMainElement, createSiteMenuTemplate(), `beforeend`); //отрисовка меню

const siteStatsElement = siteMainElement.querySelector(`.main-navigation`);

render(siteStatsElement, createStatsTemplate(), `beforeend`);//отрисовка статистики в меню
render(siteMainElement, createSortTemplate(), `beforeend`);//отрисовка фильтров
render(siteMainElement, createFilmsTemplate(), `beforeend`);//отрисовка главного блока фильмов
render(siteFooterStatisticElement, createFooterStatisticTemplate(), `beforeend`);//отрисовка статистика фильмов в футере

const filmsElement = siteMainElement.querySelector(`.films`);

render(filmsElement, createFilmListTemplate(), `beforeend`);//отрисовка блока, который отвечает за отображение списка фильмов

const filmListElement = filmsElement.querySelector(`.films-list`);
const filmListContainerElement = filmListElement.querySelector(`.films-list__container`);

for (let i = 0; i < FILM_COUNT; i++) {
    render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
} //отрисовка карточек с фильмами

render(filmListElement, createShowMoreButtonTemplate(), `beforeend`);//отрисовка кнопки "показать больше"

render(filmsElement, createTopRatedFilmListTemplate(), `beforeend`);//отрисовка блока, который отвечает за отображение списка рейтинговых фильмов

const topFilmListElement = filmsElement.querySelector(`.films-list--extra`);
const topFilmListContainerElement = topFilmListElement.querySelector(`.films-list__container`);

for (let i = 0; i < TOP_FILM_COUNT; i++) {
    render(topFilmListContainerElement, createFilmCardTemplate(), `beforeend`);
} //отрисовка карточек с рейтинговыми фильмами

render(filmsElement, createMostCommentedFilmListTemplate(), `beforeend`);//отрисовка блока, который отвечает за отображение списка просматриваемых фильмов

const commentedFilmListElement = filmsElement.querySelector(`.films-list--extra:nth-child(3)`);
const commentedFilmListContainerElement = commentedFilmListElement.querySelector(`.films-list__container`);

for (let i = 0; i < TOP_FILM_COUNT; i++) {
    render(commentedFilmListContainerElement, createFilmCardTemplate(), `beforeend`);
} //отрисовка карточек с просматриваемыми фильмами

