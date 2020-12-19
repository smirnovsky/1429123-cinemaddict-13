import {RANK} from '../const.js';
import {generateWord} from "../utils.js";
import {createElement} from "../utils.js";

const createUserRankTemplate = () => {

  return `<section class="header__profile profile">
    <p class="profile__rating">${generateWord(RANK)}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

export default class UserRank {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createUserRankTemplate();
  } // возвращает разметку

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }// получает элемент, который будет вставлен в DOM

  removeElement() {
    this._element = null;
  }
}
