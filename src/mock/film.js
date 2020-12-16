import {POSTERS, DESCRIPTIONS, TITLES, GENRIES} from '../const.js';
import {getRandomInteger, getRandomFloat, generateWord} from "../utils.js";

export const generateFilm = () => {
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
    genre: generateWord(GENRIES),
    description: generateWord(DESCRIPTIONS),
    comments: [
      {
        id: 1,
        text: `Отличный фильм!`,
        author: `Ivan Ivanov`,
        date: `2019/12/31 23:59`,
      },
      {
        id: 2,
        text: `Обожаю!`,
        author: `Ivan Ivanov`,
        date: `2019/12/31 23:59`,
      },
      {
        id: 3,
        text: `На любителя`,
        author: `Ivan Ivanov`,
        date: `2019/12/31 23:59`,
      },
    ],
    isAddToWatchlist: Boolean(getRandomInteger(0, 1)),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
