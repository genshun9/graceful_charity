import Card from "../models/Card";
import AbstractDataStore from "./AbstractDataStore";
import {changeOrderArray, getRandomArray} from "../utils";
const fs = require('fs');

class MagicCardStore extends AbstractDataStore <Card[]>{
  // サーバ起動時に実行
  init():void {
    this.cache = JSON.parse(fs.readFileSync('assets/outputCardList/magic.json', 'utf8')).map(c => Card.create(c));
  }

  // ゲームスタート時のランダマイズで実行
  randomize():void {
    const cache = this.getCache();
    const randomOrder = getRandomArray(cache.length);
    this.cache = changeOrderArray(cache, randomOrder);
  }
}

export default new MagicCardStore();