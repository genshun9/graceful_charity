import * as React from "react";
import Card from "../models/Card";

export interface CardProps {
  key: number;
  card: Card;
  onClickCard: Function;
}

const CardComponent: React.SFC<CardProps> = props => {
  return (
    <span key={props.key} style={{padding: 4}}>
      <img src={`../../../src/assets/${props.card.cardURL}.jpg`}
           style={{width: 160, height: 232}}
           onClick={() => props.onClickCard(props.card.cardID)}/>
    </span>
  )
};

export default CardComponent