import * as React from "react";
import Card from "../models/Card";

export interface CardProps {
  card: Card;
  onClickCard: Function;
}

const CardComponent: React.SFC<CardProps> = props => {
  return (
    <span style={{padding: 4}}>
      <img src={`../../../src/assets/${props.card.cardURL}.jpg`}
           style={{width: 160, height: 232}}
           onClick={() => props.onClickCard(props.card.cardID)}/>
    </span>
  )
};

export default CardComponent