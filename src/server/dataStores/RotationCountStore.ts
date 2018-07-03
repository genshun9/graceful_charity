import AbstractDataStore from "./AbstractDataStore";
import {ROTATION_MAX_NUMBER} from "../serverApplicationConstants";

class RotationCountStore extends AbstractDataStore<number> {
  // サーバ起動時に実行
  init():void {
    this.cache = 0;
  }

  isMaxRotatoin():boolean {
    return this.cache === ROTATION_MAX_NUMBER;
  }

  pick():void {
    this.cache++;
  }

  // ドラフト時に実行
  draft():void {
    this.cache++;
  }

  startSecondRound():void {
    this.cache = 0;
  }

  startThirdRound():void {
    this.cache = 0;
  }

  end():void {
    this.cache = 0;
  }
}

export default new RotationCountStore();