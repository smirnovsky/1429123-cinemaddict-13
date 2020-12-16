export const createSiteMenuItemTemplate = (filter) => {

  const {name, count} = filter;

  return `<div class="main-navigation__items">
      <a href="#${name}" class="main-navigation__item">${name}<span class="main-navigation__item-count">${count}</span></a>
    </div>`;
};

export const createSiteMenuTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createSiteMenuItemTemplate(filter, index === 0))
    .join(``);

  return `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    ${filterItemsTemplate}
  </nav>`;
};


