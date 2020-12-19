import {getRandomInteger, createElement} from "../utils.js";

const createFooterStatisticTemplate = () => {
  return `<p>${getRandomInteger(1, 9999999)} movies inside</p>`;
};

export default class FooterStatistic {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterStatisticTemplate();
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


