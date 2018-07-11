import * as React from "react";
import Card from "../models/Card";
import {CARD_TYPE} from "../../common/constants/Enums";

export interface CardListProps {
  draftDeckList: Card[]
}

const DeckListPopoverComponent: React.SFC<CardListProps> = props => {
  let monsterCardList:Card[] = [];
  let magicCardList:Card[] = [];
  let trapCardList:Card[] = [];
  let extraCardList:Card[] = [];
  // まずデッキを各種別毎に振り分ける
  props.draftDeckList.forEach((d:Card) => {
    switch (d.cardType) {
      case CARD_TYPE.MONSTER:
        monsterCardList.push(d);
        break;
      case CARD_TYPE.MAGIC:
        magicCardList.push(d);
        break;
      case CARD_TYPE.TRAP:
        trapCardList.push(d);
        break;
      case CARD_TYPE.EXTRA:
        extraCardList.push(d);
        break;
      default:
        break;
    }
  });

  // 各種内で一番枚数の多い数(<tr>要素の最大繰り返し表示回数)
  const maxCardNumber:number = Math.max.apply(null,
    [monsterCardList.length, magicCardList.length, trapCardList.length, extraCardList.length]
  );

  const createTdElement = (cardList: Card[], index:number, styleColor:string) => {
    if (cardList.length < maxCardNumber && cardList.length < index + 1) {
      return (
        <td style={{paddingLeft: 20, width: 200}}></td>
      )
    } else {
      return (
        <td style={{paddingLeft: 20, width: 200, color: styleColor}}>{cardList[index].name}</td>
      )
    }
  };

  let arrayForTrMap:number[] = [];
  for(let i = 0; i < maxCardNumber; i++) {
    arrayForTrMap[i] = i;
  }

  return (
    <div>
      <table style={{fontSize: 15}}>
        <tbody>
        <tr>
          <th style={{paddingLeft: 20, width: 200}}>モンスター</th>
          <th style={{paddingLeft: 20, width: 200}}>魔法</th>
          <th style={{paddingLeft: 20, width: 200}}>罠</th>
          <th style={{paddingLeft: 20, width: 200}}>エクストラ</th>
        </tr>
        {arrayForTrMap.map((v, i) => (
          <tr key={i}>
            {createTdElement(monsterCardList, i, "saddlebrown")}
            {createTdElement(magicCardList, i, "forestgreen")}
            {createTdElement(trapCardList, i, "mediumvioletred")}
            {createTdElement(extraCardList, i, "gray")}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
};

export default DeckListPopoverComponent