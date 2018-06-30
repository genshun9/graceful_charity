import * as React from "react";
import {DraftProps} from "../containers/DraftContainer";
import CardComponent from "./CardComponent";
import {Button, OverlayTrigger, Popover} from 'react-bootstrap'
import {GAME_PROGRESS} from "../constants/Constants";

const DraftComponent: React.SFC<DraftProps> = props => {
  const pickButton = (
    <span style={{paddingLeft: 20, paddingRight: 20}}>
      <button disabled={props.selectingCardID === "NotSelect" || props.selectingCardID === "Picked"}
              onClick={() => {
                const pickCard = props.me.handCardList.find(h => h.cardID === props.selectingCardID);
                props.onClickPick({card: pickCard, playerID: props.me.playerID})
              }}>
        ピックする
      </button>
    </span>
  );

  const popover = (
    <Popover id="popover-trigger-click-root-close" title="デッキレシピ">
      {props.me.draftDeckList.map((d, i) => (
        <div key={`deck-${i}`}>{d.name}</div>
      ))}
    </Popover>
  );

  const showDeckButton = (
    <span style={{paddingLeft: 20}}>
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={popover}>
        <Button>デッキレシピ</Button>
      </OverlayTrigger>
    </span>
  );

  const playerElm = (
    <div>
      {props.players.map((p, i) => {
        const style = (p.playerID === props.me.playerID) ? {color: "red"} : {color: "black"};
        return (
          (props.gameProgress === GAME_PROGRESS.SECOND_ROUND) ?
            <span style={style} key={i}>{`${p.playerName} ← `}</span> : <span style={style} key={i}>{`${p.playerName} → `}</span>
        )
      })}
    </div>
  );

  return (
    <div>
      <br/>
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