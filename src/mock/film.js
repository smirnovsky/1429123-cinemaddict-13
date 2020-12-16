import {POSTERS, DESCRIPTIONS, TITLES, GENRIES} from '../const.js';
import {getRandomInteger, getRandomFloat, generateWord} from "../utils.js";

export const generateFilm = () => {
  return {
    title: generateWord(TITLES),
    poster: generateWord(POSTERS),
    rating: getRandomFloat(0, 10),
    year: getRandomInteger(1800, 2020),
    duration: getRandomInteger(0, 10) + `h ` + getRandomInteger(0, 59) + `m`,
    genre: generateWord(GENRIES),
    description: generateWord(DESCRIPTIONS),
    comments: getRandomInteger(0, 1000),
    isAddToWatchlist: Boolean(getRandomInteger(0, 1)),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
