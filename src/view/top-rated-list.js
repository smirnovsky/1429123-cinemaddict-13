import {createElement} from "../utils.js";

const createTopRatedFilmListTemplate = () => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>

    <div class="films-list__container">
    
    </div>
    </section>`;
};

export default class TopRatedList {
  constructor(film) {
    this._film = film;

    this._element = null;
  }

  getTemplate() {
    return createTopRatedFilmListTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
