import SiteMenuView from "./view/site-menu.js";
import StatsView from "./view/stats.js";
import SortView from "./view/sort.js";
import UserRankView from "./view/user-rank.js";
import FilmsView from "./view/films.js";
import ShowMoreButtonView from "./view/show-more-button.js";
import FilmListView from "./view/film-list.js";
import FilmCardView from "./view/film-card.js";
import TopRatedListView from "./view/top-rated-list.js";
import MostCommentedListView from "./view/most-commented-list.js";
import FooterStatisticView from "./view/footer-statistic.js";
import PopupView from "./view/popup.js";
import NoFilmView from "./view/no-film.js";
import {generateFilm} from "./mock/film.js";
import {generateFilter} from "./mock/filter.js";
import {render, RenderPosition, remove} from "./utils/render.js";

const FILM_COUNT = 15;
const FILM_COUNT_PER_STEP = 5;
const TOP_FILM_COUNT = 2;

const films = new Array(FILM_COUNT).fill().map(generateFilm);
const filters = generateFilter(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterStatisticElement = document.querySelector(`.footer__statistics`);

render(siteHeaderElement, new UserRankView(), RenderPosition.BEFOREEND); // отрисовка звания пользователя
render(siteMainElement, new SiteMenuView(filters), RenderPosition.BEFOREEND); // отрисовка меню

const siteStatsElement = siteMainElement.querySelector(`.main-navigation`);

render(siteStatsElement, new StatsView(), RenderPosition.BEFOREEND);// отрисовка статистики в меню

const renderFilm = (filmElement, film) => {
  const filmCardComponent = new FilmCardView(film);
  const filmPopupComponent = new PopupView(film);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      remove(filmPopupComponent);
      document.body.classList.remove(`hide-overflow`);
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  render(filmElement, filmCardComponent, RenderPosition.BEFOREEND);

  filmCardComponent.setOpenPopupClickHandler(() => {

    render(document.body, filmPopupComponent, RenderPosition.BEFOREEND);
    document.body.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, onEscKeyDown);

    filmPopupComponent.setPopupCancelHandler(() => {
      remove(filmPopupComponent);
      document.body.classList.remove(`hide-overflow`);
      document.removeEventListener(`keydown`, onEscKeyDown);
    });
  });
}; // рендер карточек фильма и попапа при клике на карточку

const renderBoard = (listContainer, listFilms) => {
  const listComponent = new FilmsView();
  const filmListComponent = new FilmListView();

  render(listContainer, listComponent, RenderPosition.BEFOREEND);
  render(listComponent, filmListComponent, RenderPosition.BEFOREEND);

  if (listFilms.every((film) => film.isWatchlist)) {
    render(filmListComponent, new NoFilmView(), RenderPosition.BEFOREEND);
    return;
  }

  render(listComponent, new SortView(), RenderPosition.AFTERBEGIN);// отрисовка фильтров

  const filmListContainerElement = filmListComponent.getElement().querySelector(`.films-list__container`);


  for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
    renderFilm(filmListContainerElement, films[i]);
  } // отрисовка карточек с фильмами

  if (films.length > FILM_COUNT_PER_STEP) {
    let renderedFilmCount = FILM_COUNT_PER_STEP;

    const showMoreButtonComponent = new ShowMoreButtonView();
    render(filmListComponent, showMoreButtonComponent, RenderPosition.BEFOREEND);
    showMoreButtonComponent.setClickHandler(() => {
      films
        .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
        .forEach((film) => renderFilm(filmListContainerElement, film));

      renderedFilmCount += FILM_COUNT_PER_STEP;
      if (renderedFilmCount >= films.length) {
        remove(showMoreButtonComponent);
      }
    });
  }// отрисовка кнопки "показать больше"

  render(listComponent, new TopRatedListView(), RenderPosition.BEFOREEND);// отрисовка блока, который отвечает за отображение списка рейтинговых фильмов

  const topFilmListElement = listComponent.getElement().querySelector(`.films-list--extra`);
  const topFilmListContainerElement = topFilmListElement.querySelector(`.films-list__container`);

  for (let i = 0; i < TOP_FILM_COUNT; i++) {
    renderFilm(topFilmListContainerElement, films[i]);
  } // отрисовка карточек с рейтинговыми фильмами

  render(listComponent, new MostCommentedListView(), RenderPosition.BEFOREEND);// отрисовка блока, который отвечает за отображение списка просматриваемых фильмов

  const commentedFilmListElement = listComponent.getElement().querySelector(`.films-list--extra:nth-child(4)`);
  const commentedFilmListContainerElement = commentedFilmListElement.querySelector(`.films-list__container`);

  for (let i = 0; i < TOP_FILM_COUNT; i++) {
    renderFilm(commentedFilmListContainerElement, films[i]);
  } // отрисовка карточек с просматриваемыми фильмами

};

renderBoard(siteMainElement, films);

render(siteFooterStatisticElement, new FooterStatisticView(), RenderPosition.BEFOREEND);// отрисовка статистика фильмов в футере


