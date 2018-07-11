import AbstractCard from "../../common/models/AbstractCard";
import {CardDto} from "../dtos/index";

export default class Card extends AbstractCard {
  static create(props: CardDto) {
    return new Card(props);
  }
}