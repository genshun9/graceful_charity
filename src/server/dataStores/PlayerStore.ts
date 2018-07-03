import Player from "../models/Player";
import AbstractDataStore from "./AbstractDataStore";
import {PLAYER_MAX_NUMBER} from "../serverApplicationConstants";
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

  // FirstRound開始時に実行
  // TODO: 各カードをsetする汎用メソッドを作る
  startFirstRound():void {
    this.getCache().forEach(p => {
      const rareCardCache = RareCardStore.getCache();
      const monsterCardCache = MonsterCardStore.getCache();
      const magicCardCache = MagicCardStore.getCache();
      const trapCardCache = TrapCardStore.getCache();
      const extraCardCache = ExtraCardStore.getCache();
      let handCardList: Card[] = [];
      // レアカード2枚
      handCardList.push(rareCardCache[p.playerID]);
      handCardList.push(rareCardCache[p.playerID + PLAYER_MAX_NUMBER]);
      // モンスター10枚
      handCardList.push(monsterCardCache[p.playerID]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 2]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 3]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 4]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 5]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 6]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 7]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 8]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 9]);
      // 魔法3枚
      handCardList.push(magicCardCache[p.playerID]);
      handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER]);
      handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER * 2]);
      // 罠3枚
      handCardList.push(trapCardCache[p.playerID]);
      handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER]);
      handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER * 2]);
      // Ex3枚
      handCardList.push(extraCardCache[p.playerID]);
      handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER]);
      handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER * 2]);
      p.draft(HandCardList.create(handCardList));
    });
  }

  startSecondRound():void {
    this.getCache().forEach(p => {
      const rareCardCache = RareCardStore.getCache();
      const monsterCardCache = MonsterCardStore.getCache();
      const magicCardCache = MagicCardStore.getCache();
      const trapCardCache = TrapCardStore.getCache();
      const extraCardCache = ExtraCardStore.getCache();
      let handCardList: Card[] = [];
      // レアカード2枚
      handCardList.push(rareCardCache[p.playerID + PLAYER_MAX_NUMBER * 2]);
      handCardList.push(rareCardCache[p.playerID + PLAYER_MAX_NUMBER * 3]);
      // モンスター10枚
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 10]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 11]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 12]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 13]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 14]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 15]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 16]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 17]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 18]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 19]);
      // 魔法3枚
      handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER * 3]);
      handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER * 4]);
      handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER * 5]);
      // 罠3枚
      handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER * 3]);
      handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER * 4]);
      handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER * 5]);
      // Ex3枚
      handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER * 3]);
      handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER * 4]);
      handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER * 5]);
      p.draft(HandCardList.create(handCardList));
    });
  }

  startThirdRound():void {
    this.getCache().forEach(p => {
      const rareCardCache = RareCardStore.getCache();
      const monsterCardCache = MonsterCardStore.getCache();
      const magicCardCache = MagicCardStore.getCache();
      const trapCardCache = TrapCardStore.getCache();
      const extraCardCache = ExtraCardStore.getCache();
      let handCardList: Card[] = [];
      // レアカード2枚
      handCardList.push(rareCardCache[p.playerID + PLAYER_MAX_NUMBER * 4]);
      handCardList.push(rareCardCache[p.playerID + PLAYER_MAX_NUMBER * 5]);
      // モンスター10枚
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 20]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 21]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 22]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 23]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 24]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 25]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 26]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 27]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 28]);
      handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 29]);
      // 魔法3枚
      handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER * 6]);
      handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER * 7]);
      handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER * 8]);
      // 罠3枚
      handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER * 6]);
      handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER * 7]);
      handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER * 8]);
      // Ex3枚
      handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER * 6]);
      handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER * 7]);
      handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER * 8]);
      p.draft(HandCardList.create(handCardList));
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

  // 次のラウンドに移る時に実行
  nextRound(): void {

  }
}

export default new PlayerStore();