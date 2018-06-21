export default class User {
  readonly userID: string;
  readonly userName: string;
  // pickCardID: number;
  draftDeckList: number[];
  handCardList: number[];

  constructor(props: { userID: string, userName: string, draftDeckList: number[], handCardList: number[] }) {
    this.userID = props.userID;
    this.userName = props.userName;
    this.draftDeckList = props.draftDeckList;
    this.handCardList = props.handCardList;
  }

  pick(cardID: number): User {
    // Immutableを使わないので破壊的メソッドを使う
    this.draftDeckList.push(cardID);
    return this;
  }

  draft(nextHandCardList: number[]): User {
    this.handCardList = nextHandCardList;
    return this;
  }
}