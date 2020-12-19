import {createElement} from "../utils.js";

const createSiteMenuItemTemplate = (filter) => {

  const {name, count} = filter;

  return `<div class="main-navigation__items">
      <a href="#${name}" class="main-navigation__item">${name}<span class="main-navigation__item-count">${count}</span></a>
    </div>`;
};

const createSiteMenuTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createSiteMenuItemTemplate(filter, index === 0))
    .join(``);

  return `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    ${filterItemsTemplate}
  </nav>`;
};

export default class SiteMenu {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._filters);
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

