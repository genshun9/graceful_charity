export default abstract class AbstractCard {
  readonly name: string;
  readonly cardID: string;
  readonly cardURL: string;
  readonly cardType: number;

  constructor(props: { name: string, cardID: string, cardURL: string, cardType: number }) {
    this.name = props.name;
    this.cardID = props.cardID;
    this.cardURL = props.cardURL;
    this.cardType = props.cardType;
  }

  static create(props: { name: string, cardID: string, cardURL: string, cardType: number }) {}
}