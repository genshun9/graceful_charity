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
  pick():void {

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

  // ドラフト時に実行
  draft():void {

  }

  // 次のラウンドに移る時に実行
  nextRound(): void {

  }
}

export default new PlayerStore();