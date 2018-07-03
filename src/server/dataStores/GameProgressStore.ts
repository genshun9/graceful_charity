import AbstractDataStore from "./AbstractDataStore";
import {GAME_PROGRESS} from "../../common/constants/Enums";

class GameProgressStore extends AbstractDataStore<number> {
  // サーバ起動時に実行
  init():void {
    this.cache = GAME_PROGRESS.NOT_LOGIN;
  }

  // 1巡目と3巡目は時計回りでドラフトする
  isClockWise():boolean {
    return this.cache === GAME_PROGRESS.FIRST_ROUND || this.cache === GAME_PROGRESS.THIRD_ROUND;
  }

  // 2巡目は反時計回りでドラフトする
  isCounterClockWise():boolean {
    return this.cache === GAME_PROGRESS.SECOND_ROUND;
  }

  startFirstRound():void {
    this.cache = GAME_PROGRESS.FIRST_ROUND;
  }

  startSecondRound():void {
    this.cache = GAME_PROGRESS.SECOND_ROUND;
  }

  startThirdRound():void {
    this.cache = GAME_PROGRESS.THIRD_ROUND;
  }

  end():void {
    this.cache = GAME_PROGRESS.END;
  }
}

export default new GameProgressStore();