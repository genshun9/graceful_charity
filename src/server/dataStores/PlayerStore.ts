import Player from "../models/Player";
import AbstractDataStore from "./AbstractDataStore";
import {PLAYER_MAX_NUMBER} from "../serverApplicationConstants";

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

  // ドラフト時に実行
  draft():void {

  }

  // 次のラウンドに移る時に実行
  nextRound(): void {

  }
}

export default new PlayerStore();