import {createElement} from "../utils.js";

const createPopupCommentsTemplate = (film) => {
  const {comments} = film;

  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${comments[0].emoji}.png" width="55" height="55" alt="emoji-smile">
  </span>
  <div>
    <p class="film-details__comment-text">${comments[0].text}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${comments[0].author}</span>
      <span class="film-details__comment-day">${comments[0].text}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
</li>`;
};

export default class PopupComments {
  constructor(film) {
    this._film = film;

    this._element = null;
  }

  getTemplate() {
    return createPopupCommentsTemplate(this._film);
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
