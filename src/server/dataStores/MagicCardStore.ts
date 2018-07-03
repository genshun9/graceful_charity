import Card from "../models/Card";
import AbstractDataStore from "./AbstractDataStore";
import MagicCardList from "../../common/constants/MagicCardList";
import {changeOrderArray, getRandomArray} from "../utils";

class MagicCardStore extends AbstractDataStore <Card[]>{
  // サーバ起動時に実行
  init():void {
    this.cache = MagicCardList.map(c => Card.create(c));
  }

  // ゲームスタート時のランダマイズで実行
  randomize():void {
    const cache = this.getCache();
    const randomOrder = getRandomArray(cache.length);
    this.cache = changeOrderArray(cache, randomOrder);
  }
}

export default new MagicCardStore();