import * as React from "react";
import {DraftProps} from "../containers/DraftContainer";
import CardComponent from "./CardComponent";

const DraftComponent: React.SFC<DraftProps> = props => {
  const pickButton = (
    <div>
      <button disabled={props.selectingCardID === "NotSelect" || props.selectingCardID === "Picked"}
              onClick={() => {
                const pickCard = props.me.handCardList.find(h => h.cardID === props.selectingCardID);
                props.onClickPick({card: pickCard, playerID: props.me.playerID})
              }}>
        ピックする
      </button>
    </div>
  );

  const playerElm = (
    <div>
      {props.players.map(p => (
        `${p.playerName} → `
      ))}
    </div>
  );

  return (
    <div>
      {pickButton}
      {props.me.handCardList.map((c, i) => (
          <span key={`card-${i}`}>
              {(i + 1) % 5 === 0 ? <p/> : null}
            <CardComponent card={c} onClickCard={cardID => props.onClickCard(cardID)}/>
            </span>
        )
      )}
      {playerElm}
    </div>
  )
};

export default DraftComponent