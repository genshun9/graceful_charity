import Card from "./Card";

export default class Player {
  readonly playerID: number;
  readonly playerName: string;
  draftDeckList: Card[];
  handCardList: Card[];
  selectCardID: string;

  constructor(props: { playerID: number, playerName: string, draftDeckList: Card[], handCardList: Card[], selectCardID: string}) {
    this.playerID = props.playerID;
    this.playerName = props.playerName;
    this.draftDeckList = props.draftDeckList;
    this.handCardList = props.handCardList;
    this.selectCardID = props.selectCardID;
  }

  static create(props: { playerID: number, playerName: string, draftDeckList: any[], handCardList: any[]}) {
    return new Player(Object.assign({}, props, {
      draftDeckList: [],
      handCardList: [],
      selectCardID: ""
    }));
  }
}