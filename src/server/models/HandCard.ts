import Card from "./Card";

export default class HandCardList {
  handCard: Card[];

  constructor(props: {cardID: string, cardURL: string}[]) {
    this.handCard = props.map(p => Card.create(p));
  }

  static create(props: {cardID: string, cardURL: string}[]) {
    return new HandCardList(props);
  }

  // プレイヤーによって手札からカードを1枚ピックされた時
  picked(cardID: string): HandCardList {
    this.handCard = this.handCard.filter(h => h.cardID !== cardID);
    return this;
  }
}