import {getRandomInteger} from "../utils/common.js";
import AbstractView from "./abstract.js";

const createFooterStatisticTemplate = () => {
  return `<p>${getRandomInteger(1, 9999999)} movies inside</p>`;
};

export default class FooterStatistic extends AbstractView {
  getTemplate() {
    return createFooterStatisticTemplate();
  }
}


