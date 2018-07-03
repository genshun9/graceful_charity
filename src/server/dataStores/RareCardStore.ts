import Card from "../models/Card";
import AbstractDataStore from "./AbstractDataStore";
import RareCardList from "../../common/constants/RareCardList";
import {changeOrderArray, getRandomArray} from "../index";

class RareCardStore extends AbstractDataStore <Card[]>{
  // サーバ起動時に実行
  init():void {
    this.cache = RareCardList.map(c => Card.create(c));
  }

  // ゲームスタート時のランダマイズで実行
  randomize():void {
    const cache = this.getCache();
    const randomOrder = getRandomArray(cache.length);
    this.cache = changeOrderArray(cache, randomOrder);
  }
}

export default new RareCardStore();