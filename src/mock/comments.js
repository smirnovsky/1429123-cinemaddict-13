import {getRandomInteger, generateDay} from "../utils.js";
import {EMOJIES} from "../const.js";

export const generateComments = () => {
  const comments = [
    `Хороший фильм!`,
    `Понравился`,
    `Что-то скучно...`,
    `Рекомендую`
  ];

  const authors = [
    `Иван Иванов`,
    `Кот Матроскин`,
    `Доктор Ватсон`,
    `Вася Пупкин`
  ];

  const generateComment = () => {
    return comments[getRandomInteger(0, comments.length - 1)];
  };

  const generateCommentAuthor = () => {
    return authors[getRandomInteger(0, authors.length - 1)];
  };

  const generateCommentEmoji = () => {
    return EMOJIES[getRandomInteger(0, EMOJIES.length - 1)];
  };

  const generatePopupComment = () => {
    return {
      comment: generateComment(),
      author: generateCommentAuthor(),
      emoji: generateCommentEmoji(),
      date: generateDay()
    };
  };

  return new Array(getRandomInteger(1, 4)).fill().map(generatePopupComment);
};
