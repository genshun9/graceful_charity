import * as React from "react";
import {DraftProps} from "../containers/DraftContainer";
import CardComponent from "./CardComponent";
import {Popover} from 'react-bootstrap'

const DraftComponent: React.SFC<DraftProps> = props => {
  const pickButton = (
    <span>
      <button disabled={props.selectingCardID === "NotSelect" || props.selectingCardID === "Picked"}
              onClick={() => {
                const pickCard = props.me.handCardList.find(h => h.cardID === props.selectingCardID);
                props.onClickPick({card: pickCard, playerID: props.me.playerID})
              }}>
        ピックする
      </button>
    </span>
  );

  const showDeckButton = (
    <span>
      <Popover id="popover-trigger-click-root-close" title="デッキレシピ">
        <strong>Holy guacamole!</strong>
      </Popover>
    </span>
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
      {showDeckButton}
      {props.me.handCardList.map((c, i) => (
          <span key={`card-${i}`}>
              {i % 7 === 0 ? <p/> : null}
            <CardComponent card={c}
                           onClickCard={cardID => props.onClickCard(cardID)}
                           selectingCardID={props.selectingCardID}
                           selectedCardID={props.selectedCardID}/>
            </span>
        )
      )}
      {playerElm}
    </div>
  )
};

export default DraftComponent