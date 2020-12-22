import AbstractView from "./abstract.js";

const createTopRatedFilmListTemplate = () => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>

    <div class="films-list__container">
    
    </div>
    </section>`;
};

export default class TopRatedList extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
  }

  getTemplate() {
    return createTopRatedFilmListTemplate(this._film);
  }
}
