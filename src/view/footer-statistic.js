import {getRandomInteger} from "../utils.js";

export const createFooterStatisticTemplate = () => {
  return `<p>${getRandomInteger(1, 9999999)} movies inside</p>`;
};

