import * as React from "react";
import Card from "../models/Card";
import {Picked, SelectState} from "../reducers/PlayerReducer";

export interface CardProps {
  selectedCardID: string; // 選択後次のピックが始まるまでに、選択したカードの情報をviewで使うため
  selectingCardID: SelectState // カードをクリックしたらスタイルを変えるために使う
  card: Card;
  onClickCard: Function;
}

const CardComponent: React.SFC<CardProps> = props => {
  const style =
    (props.selectingCardID === props.card.cardID) ? {width: 120, border: "solid 5px blue"}
    : (props.selectingCardID === "Picked" && props.selectedCardID === props.card.cardID) ? {width: 120, border: "solid 5px Silver"}
    : {width: 120, border: "solid 5px transparent"};
  return (
    <span style={{padding: 4}}>
      <img src={`../../../../assets/img/${props.card.cardURL}.jpg`}
           style={style}
           onClick={() => props.selectingCardID === "Picked" ? {} : props.onClickCard(props.card.cardID)
           }/>
    </span>
  )
};

export default CardComponent