const filterToFilterMap = {

  Watchlist: (films) => films
    .filter((film) => film.isAddToWatchlist).length,

  History: (films) => films.filter((film) => film.isWatchlist).length,

  Favorites: (films) => films
    .filter((film) => film.isFavorite).length,
};

export const generateFilter = (films) => {
  return Object.entries(filterToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films),
    };
  });
};
