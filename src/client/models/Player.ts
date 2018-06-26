import Card from "./Card";

export default class Player {
  readonly playerID: number;
  readonly playerName: string;
  draftDeckList: Card[];
  handCardList: Card[];

  constructor(props: { playerID: number, playerName: string, draftDeckList: Card[], handCardList: Card[]}) {
    this.playerID = props.playerID;
    this.playerName = props.playerName;
    this.draftDeckList = props.draftDeckList;
    this.handCardList = props.handCardList;
  }

  static create(props: { playerID: number, playerName: string, draftDeckList: any[], handCardList: any[]}) {
    return new Player(Object.assign({}, props, {
      draftDeckList: [],
      handCardList: []
    }));
  }
}