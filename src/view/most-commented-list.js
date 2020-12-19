import {createElement} from "../utils.js";

const createMostCommentedFilmListTemplate = () => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Most commented</h2>

    <div class="films-list__container">
    
    </div>
    </section>`;
};

export default class MostCommentedList {
  constructor(film) {
    this._film = film;

    this._element = null;
  }

  getTemplate() {
    return createMostCommentedFilmListTemplate(this._film);
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

