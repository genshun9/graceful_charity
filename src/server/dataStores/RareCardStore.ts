import Card from "../models/Card";
import AbstractDataStore from "./AbstractDataStore";
import {changeOrderArray, getRandomArray} from "../utils";
import {PLAYER_MAX_NUMBER, RARE_CARD_INIT_NUMBER} from "../serverApplicationConstants";
const fs = require('fs');

class RareCardStore extends AbstractDataStore <Card[]>{
  // サーバ起動時に実行
  init():void {
    this.cache = JSON.parse(fs.readFileSync('assets/outputCardList/rare.json', 'utf8')).map(c => Card.create(c));
    if (this.cache.length !== PLAYER_MAX_NUMBER * RARE_CARD_INIT_NUMBER * 3) {
      const errMsg = `レアカードの総和が${PLAYER_MAX_NUMBER * RARE_CARD_INIT_NUMBER * 3}ありません。\nassets/inputCardList/rare.txtと.envが辻褄合うように修正してください。`;
      throw errMsg;
    }
  }

  // ゲームスタート時のランダマイズで実行
  randomize():void {
    const cache = this.getCache();
    const randomOrder = getRandomArray(cache.length);
    this.cache = changeOrderArray(cache, randomOrder);
  }
}

export default new RareCardStore();