export default class Card {
  readonly cardID: string;
  readonly cardURL: string;

  constructor(props: { cardID: string, cardURL: string }) {
    this.cardID = props.cardID;
    this.cardURL = props.cardURL;
  }

  static create(props: { cardID: string, cardURL: string }) {
    return new Card(props);
  }
}