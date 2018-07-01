import AbstractCard from "../../common/models/AbstractCard";

export default class Card extends AbstractCard {
  static create(props: { name: string, cardID: string, cardURL: string }) {
    return new Card(props);
  }
}