import Card from "./Card";
import AbstractPlayer from "../../common/models/AbstractPlayer";
import {PlayerDto} from "../dtos/index";

export default class Player extends AbstractPlayer {
  draftDeckList: Card[];
  handCardList: Card[];

  constructor(props: PlayerDto) {
    super(props);
    this.draftDeckList = props.draftDeckList;
    this.handCardList = props.handCardList;
  }

  static create(props: PlayerDto) {
    return new Player(Object.assign({}, props, {
      draftDeckList: props.draftDeckList ? props.draftDeckList.map(d => Card.create(d)) : [],
      handCardList: props.handCardList ? props.handCardList.map(h => Card.create(h)) : []
    }));
  }
}