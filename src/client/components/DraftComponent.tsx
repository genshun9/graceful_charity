import * as React from "react";
import {DraftProps} from "../containers/DraftContainer";
import CardComponent from "./CardComponent";
import {Button, OverlayTrigger, Popover} from 'react-bootstrap'
import {GAME_PROGRESS} from "../../common/constants/Enums";
import {ROTATION_MAX_NUMBER} from "../constants/ClientApplicationConstants";

const DraftComponent: React.SFC<DraftProps> = props => {
  const pickCount = (props.me.draftDeckList.length + 1 ) % (ROTATION_MAX_NUMBER) === 0
    ? (ROTATION_MAX_NUMBER) : (props.me.draftDeckList.length + 1 ) % (ROTATION_MAX_NUMBER);
  const progressMessageElm = (
    <div style={{paddingLeft: 20, fontSize: 20, fontWeight: 600}}>
      {`第${props.gameProgress - 2}巡目の${pickCount}ピック目`}
    </div>
  );

  const pickButton = (
    <span style={{paddingLeft: 20, paddingRight: 20}}>
      <Button type="submit"
              disabled={props.selectingCardID === "NotSelect" || props.selectingCardID === "Picked"}
              onClick={() => {
                const pickCard = props.me.handCardList.find(h => h.cardID === props.selectingCardID);
                props.onClickPick({card: pickCard, playerID: props.me.playerID})
              }}>
          ピック
        </Button>
    </span>
  );

  const pickListPopover = (
    <Popover id="popover-trigger-click-root-close" title="ピック順に表示">
      {props.me.draftDeckList.map((d, i) => (
        <div key={`deck-${i}`}>{d.name}</div>
      ))}
    </Popover>
  );

  const showPickListButton = (
    <span style={{paddingLeft: 20}}>
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={pickListPopover}>
        <Button>ピックリスト</Button>
      </OverlayTrigger>
    </span>
  );

  const deckListPopover = (
    <Popover id="popover-trigger-click-root-close" title="カード種別に表示">
      {props.me.draftDeckList.map((d, i) => (
        <div key={`deck-${i}`}>{d.name}</div>
      ))}
    </Popover>
  );

  const showDeckListButton = (
    <span style={{paddingLeft: 20}}>
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={deckListPopover}>
        <Button>デッキリスト</Button>
      </OverlayTrigger>
    </span>
  );

  const playerListElm = (
    <div style={{paddingLeft: 20, fontSize: 15, fontWeight: 500}}>
      {"プレイヤー順: "}
      {props.players.map((p, i) => {
        const style = (p.playerID === props.me.playerID) ? {color: "red"} : {color: "black"};
        // includesの型定義がない？のでsomeメソッドを使う
        const playerName = props.pickedPlayerIDs.some(id => id === p.playerID) ? `${p.playerName}` : `${p.playerName}(ピック中)`;
        return (
          (props.gameProgress === GAME_PROGRESS.SECOND_ROUND) ?
            <span style={style} key={i}>{`${playerName} ← `}</span> : <span style={style} key={i}>{`${playerName} → `}</span>
        )
      })}
    </div>
  );

  const cardListElm = (props.me.handCardList.map((c, i) => (
    <span key={`card-${i}`}>
              {i % (ROTATION_MAX_NUMBER / 3) === 0 ? <p/> : null}
      <CardComponent card={c}
                     onClickCard={cardID => props.onClickCard(cardID)}
                     selectingCardID={props.selectingCardID}
                     selectedCardID={props.selectedCardID}/>
            </span>
  )));

  return (
    <div>
      <br/>
      {progressMessageElm}
      <br/>
      {pickButton}
      {showPickListButton}
      {showDeckListButton}
      <br/>
      <br/>
      {playerListElm}
      {cardListElm}
    </div>
  )
};

export default DraftComponent