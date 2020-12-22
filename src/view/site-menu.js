import AbstractView from "./abstract.js";

const createSiteMenuItemTemplate = (filter) => {

  const {name, count} = filter;

  return `<div class="main-navigation__items">
      <a href="#${name}" class="main-navigation__item">${name}<span class="main-navigation__item-count">${count}</span></a>
    </div>`;
};

const createSiteMenuTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createSiteMenuItemTemplate(filter))
    .join(``);

  return `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    ${filterItemsTemplate}
  </nav>`;
};

export default class SiteMenu extends AbstractView {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._filters);
  }
}

