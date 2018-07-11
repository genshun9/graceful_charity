import AbstractDataStore from "./AbstractDataStore";
import {PLAYER_MAX_NUMBER} from "../serverApplicationConstants";

class PickedUserCountStore extends AbstractDataStore<number> {
  // サーバ起動時に実行
  init():void {
    this.cache = 0;
  }

  pick():void {
    this.cache++;
  }

  isAllPlayerPick():boolean {
    return this.cache === PLAYER_MAX_NUMBER;
  }

  // ドラフト時に実行
  draft():void {
    this.cache = 0;
  }
}

export default new PickedUserCountStore();