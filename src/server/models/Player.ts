import HandCardList from "./HandCard";
import Card from "./Card";

export default class Player {
  readonly playerID: string;
  readonly playerName: string;
  draftDeckList: Card[];
  handCardList: HandCardList;

  constructor(props: { playerID: string, playerName: string, draftDeckList: Card[], handCardList: HandCardList }) {
    this.playerID = props.playerID;
    this.playerName = props.playerName;
    this.draftDeckList = props.draftDeckList;
    this.handCardList = props.handCardList;
  }

  // 最初の生成はplayerIDとplayerNameのみで、残りは空配列であるが、型の整合性のため各クラスをcreateする
  static create(props: { playerID: string, playerName: string, draftDeckList: any[], handCardList: any }) {
    return new Player(Object.assign({}, props, {
      draftDeckList: props.draftDeckList.map(d => Card.create(d)),
      handCardList: HandCardList.create(props.handCardList)
    }));
  }

  // プレイヤーが手札からカードを1枚ピックする時
  pick(cardID: string, cardURL: string): Player {
    // Immutableを使わないので破壊的メソッドを使う
    this.draftDeckList.push(Card.create({cardID, cardURL}));
    this.handCardList.picked(cardID);
    return this;
  }

  // 全員がピックが終わり、手札を交換する時
  draft(nextHandCardList: HandCardList): Player {
    this.handCardList = nextHandCardList;
    return this;
  }

}