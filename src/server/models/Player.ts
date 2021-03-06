import AbstractPlayer from "../../common/models/AbstractPlayer"
import HandCardList from "./HandCard";
import Card from "./Card";
import {CardDto, PlayerDto} from "../dtos";
import * as _ from "lodash";

export default class Player extends AbstractPlayer {
  draftDeckList: Card[];
  handCardList: HandCardList;

  constructor(props: PlayerDto) {
    super(props);
    this.draftDeckList = props.draftDeckList;
    this.handCardList = HandCardList.create(props.handCardList.handCard);
  }

  // 最初の生成はplayerIDとplayerNameのみで、残りは空配列であるが、型の整合性のため各クラスをcreateする
  static create(props: PlayerDto) {
    return new Player(Object.assign({}, props, {
      draftDeckList: props.draftDeckList.map(d => Card.create(d)),
      handCardList: HandCardList.create(props.handCardList.handCard)
    }));
  }

  // プレイヤーが手札からカードを1枚ピックする時
  pick(props: CardDto): Player {
    // Immutableを使わないので破壊的メソッドを使う
    this.draftDeckList.push(Card.create(props));
    this.handCardList.picked(props.cardID);
    return this;
  }

  // 全員がピックが終わり、手札を交換する時
  draft(nextHandCardList: HandCardList): Player {
    this.handCardList = nextHandCardList;
    return this;
  }

}