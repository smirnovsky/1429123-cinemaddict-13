import {POSTERS, DESCRIPTIONS, TITLES, GENRIES} from '../const.js';
import {generatePopupComments} from "../view/popup-comments.js";
import {getRandomInteger, getRandomFloat, generateWord, generateDay} from "../utils.js";

export const generateFilm = (dueDate) => {
  return {
    title: generateWord(TITLES),
    originalTitle: generateWord(TITLES),
    director: generateWord(TITLES),
    writers: generateWord(TITLES),
    actors: generateWord(TITLES),
    country: generateWord(TITLES),
    poster: generateWord(POSTERS),
    rating: getRandomFloat(0, 10),
    year: getRandomInteger(1800, 2020),
    duration: getRandomInteger(0, 10) + `h ` + getRandomInteger(0, 59) + `m`,
    release: generateDay(dueDate),
    genre: generateWord(GENRIES),
    description: generateWord(DESCRIPTIONS),
    ageLimit: getRandomInteger(0, 22),
    comments: generatePopupComments(),
    isAddToWatchlist: Boolean(getRandomInteger(0, 1)),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
