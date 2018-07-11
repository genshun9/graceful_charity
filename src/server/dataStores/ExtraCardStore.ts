import Card from "../models/Card";
import AbstractDataStore from "./AbstractDataStore";
import ExtraCardList from "../../common/constants/ExtraCardList";
import {changeOrderArray, getRandomArray} from "../utils";

class ExtraCardStore extends AbstractDataStore <Card[]>{
  // サーバ起動時に実行
  init():void {
    this.cache = ExtraCardList.map(c => Card.create(c));
  }

  // ゲームスタート時のランダマイズで実行
  randomize():void {
    const cache = this.getCache();
    const randomOrder = getRandomArray(cache.length);
    this.cache = changeOrderArray(cache, randomOrder);
  }
}

export default new ExtraCardStore();