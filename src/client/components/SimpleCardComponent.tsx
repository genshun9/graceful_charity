import * as React from "react";
import Card from "../models/Card";

export interface SimpleCardProps {
  card: Card;
}

// CardComponentに共通化したい
const SimpleCardComponent: React.SFC<SimpleCardProps> = props => {
  return (
    <span style={{padding: 2}}>
      <img src={`../../../../assets/img/${props.card.cardURL}.jpg`}
           style={{width: 100}}
           />
    </span>
  )
};

export default SimpleCardComponent