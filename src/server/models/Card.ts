import AbstractCard from "../../common/models/AbstractCard";

export default class Card extends AbstractCard {
  static create(props: { name: string, cardID: string, cardURL: string, cardType: number }) {
    return new Card(props);
  }
}