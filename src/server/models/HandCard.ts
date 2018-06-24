import Card from "./Card";

export default class HandCardList {
  handCard: Card[];

  constructor(props: Card[]) {
    this.handCard = props;
  }

  static create(props: Card[]) {
    return new HandCardList(props);
  }

  // プレイヤーによって手札からカードを1枚ピックされた時
  picked(cardID: string): HandCardList {
    this.handCard = this.handCard.filter(h => h.cardID !== cardID);
    return this;
  }
}