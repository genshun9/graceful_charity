import Card from "../models/Card";
import AbstractDataStore from "./AbstractDataStore";
import TrapCardList from "../../common/constants/TrapCardList";
import {changeOrderArray, getRandomArray} from "../index";

class TrapCardStore extends AbstractDataStore <Card[]>{
  // サーバ起動時に実行
  init():void {
    this.cache = TrapCardList.map(c => Card.create(c));
  }

  // ゲームスタート時のランダマイズで実行
  randomize():void {
    const cache = this.getCache();
    const randomOrder = getRandomArray(cache.length);
    this.cache = changeOrderArray(cache, randomOrder);
  }
}

export default new TrapCardStore();