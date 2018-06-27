import * as React from "react";
import {DraftProps} from "../containers/DraftContainer";
import CardComponent from "./CardComponent";
import Card from "../models/Card";

const DraftComponent: React.SFC<DraftProps> = props => {
  const src = ['4HZgkF5eTAsS', '4Sq6hpEqdAsS', '8lTB9DmqJh1F', 'iVIsWINQHhCU', 'T1Tr04WCwUZB', 'AHWIVNomv6qk'];
  const card:Card[] = src.map(s => new Card({name: s, cardID: s, cardURL: s}));
  return (
    <div>
      {card.map((c, i) => (
            <span key={`card-${i}`}>
              {(i + 1) % 5 === 0 ? <p/> : null}
            <CardComponent card={c} onClickCard={cardID => props.onClickCard(cardID)}/>
            </span>
        )
      )}
    </div>
  )
};

export default DraftComponent