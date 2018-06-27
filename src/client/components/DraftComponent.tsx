import * as React from "react";
import {DraftProps} from "../containers/DraftContainer";
import CardComponent from "./CardComponent";
import Card from "../models/Card";

const DraftComponent: React.SFC<DraftProps> = props => {
  const src = ['4HZgkF5eTAsS', '4Sq6hpEqdAsS', '8lTB9DmqJh1F', 'iVIsWINQHhCU'];
  const card:Card[] = src.map(s => new Card({name: s, cardID: s, cardURL: s}));
  return (
    <div>
      {card.map((c,i) => (
        <CardComponent key={i} card={c} onClickCard={cardID => props.onClickCard(cardID)}/>
      ))}
    </div>
  )
};

export default DraftComponent