import Player from "../models/Player";
import AbstractDataStore from "./AbstractDataStore";
import {
  EXTRA_CARD_INIT_NUMBER,
  MAGIC_CARD_INIT_NUMBER, MONSTER_CARD_INIT_NUMBER, PLAYER_MAX_NUMBER,
  RARE_CARD_INIT_NUMBER, TRAP_CARD_INIT_NUMBER
} from "../serverApplicationConstants";
import HandCardList from "../models/HandCard";
import Card from "../models/Card";
import RareCardStore from "./RareCardStore";
import MonsterCardStore from "./MonsterCardStore";
import MagicCardStore from "./MagicCardStore";
import TrapCardStore from "./TrapCardStore";
import ExtraCardStore from "./ExtraCardStore";

class PlayerStore extends AbstractDataStore <Player[]>{
  // サーバ起動時に実行
  init():void {
    this.cache = [];
  }

  // ログイン時に実行
  create(props: Player):void {
    this.cache.push(props);
  }

  // ゲーム開始か否かを確認
  isMaxPlayer():boolean {
    return this.cache.length === PLAYER_MAX_NUMBER
  }

  // プレイヤーがカードをpickした時に実行
  pick(pickData: { playerID: number, card: { name: string, cardID: string, cardURL: string, cardType: number }} ):void {
    this.getCache().find(p => p.playerID === pickData.playerID)
      .pick({name: pickData.card.name, cardID: pickData.card.cardID, cardURL: pickData.card.cardURL, cardType: null});
  }

  startFirstRound():void {
    this.getCache().forEach(p => {
      p.draft(HandCardList.create(this.getNextHandCardList(p, 1)));
    });
  }

  startSecondRound():void {
    this.getCache().forEach(p => {
      p.draft(HandCardList.create(this.getNextHandCardList(p, 2)));
    });
  }

  startThirdRound():void {
    this.getCache().forEach(p => {
      p.draft(HandCardList.create(this.getNextHandCardList(p, 3)));
    });
  }

  // ドラフト時に実行、引数がtrueなら時計回りにdraftする
  draft(isClockWise:boolean):void {
    if (isClockWise) {
      const newHandCardList: HandCardList[] = this.cache.map(p => p.handCardList);
      this.cache.forEach((p, i) => {
        if (i === 0) {
          p.draft(newHandCardList[PLAYER_MAX_NUMBER - 1])
        } else {
          p.draft(newHandCardList[p.playerID - 1])
        }
      });
    } else {
      const newHandCardList: HandCardList[] = this.cache.map(p => p.handCardList);
      this.cache.forEach((p, i) => {
        if (i === PLAYER_MAX_NUMBER - 1) {
          p.draft(newHandCardList[0])
        } else {
          p.draft(newHandCardList[p.playerID + 1])
        }
      });
    }
  }

  private getNextHandCardList(p: Player, round: number): Card[] {
    const rareCardCache = RareCardStore.getCache();
    const monsterCardCache = MonsterCardStore.getCache();
    const magicCardCache = MagicCardStore.getCache();
    const trapCardCache = TrapCardStore.getCache();
    const extraCardCache = ExtraCardStore.getCache();
    let handCardList: Card[] = [];

    // レアカード2枚
    for (let i = 0; i < RARE_CARD_INIT_NUMBER; i++) {
      handCardList.push(rareCardCache[p.playerID + PLAYER_MAX_NUMBER * (i + RARE_CARD_INIT_NUMBER * (round - 1))]);
    }
    // モンスター10枚
    for (let i = 0; i < MONSTER_CARD_INIT_NUMBER; i++) {
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * (i + MONSTER_CARD_INIT_NUMBER * (round - 1))]);
    }
    // 魔法3枚
    for (let i = 0; i < MAGIC_CARD_INIT_NUMBER; i++) {
      handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER * (i + MAGIC_CARD_INIT_NUMBER * (round - 1))]);
    }
    // 罠3枚
    for (let i = 0; i < TRAP_CARD_INIT_NUMBER; i++) {
      handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER * (i + TRAP_CARD_INIT_NUMBER * (round - 1))]);
    }
    // Ex3枚
    for (let i = 0; i < EXTRA_CARD_INIT_NUMBER; i++) {
      handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER * (i + EXTRA_CARD_INIT_NUMBER * (round - 1))]);
    }

    return handCardList;
  }
}

export default new PlayerStore();