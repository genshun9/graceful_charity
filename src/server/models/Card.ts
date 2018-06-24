export default class Card {
  readonly name: string;
  readonly cardID: string;
  readonly cardURL: string;

  constructor(props: { name: string, cardID: string, cardURL: string }) {
    this.name = props.name;
    this.cardID = props.cardID;
    this.cardURL = props.cardURL;
  }

  static create(props: { name: string, cardID: string, cardURL: string }) {
    return new Card(props);
  }
}