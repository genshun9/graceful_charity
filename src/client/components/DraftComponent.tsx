import * as React from "react";
import {DraftProps} from "../containers/DraftContainer";
import CardComponent from "./CardComponent";
import {Button, OverlayTrigger, Popover} from 'react-bootstrap'
import {CARD_TYPE, GAME_PROGRESS} from "../../common/constants/Enums";
import {ROTATION_MAX_NUMBER} from "../constants/ClientApplicationConstants";
import Card from "../models/Card";

const DraftComponent: React.SFC<DraftProps> = props => {
  const pickCount = (props.me.draftDeckList.length + 1 ) % (ROTATION_MAX_NUMBER) === 0
    ? (ROTATION_MAX_NUMBER) : (props.me.draftDeckList.length + 1 ) % (ROTATION_MAX_NUMBER);
  const pickState = props.selectingCardID === "Picked" ? "他のプレイヤーのピック待ちです" : "ピック中";
  const progressMessageElm = (
    <div style={{paddingLeft: 20, fontSize: 20, fontWeight: 600}}>
      <span>
      {`第${props.gameProgress - 2}巡目の${pickCount}ピック目`}
      </span>
      <span style={{color: "blue", paddingLeft: 40}}>
        {pickState}
      </span>
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
        <div key={`pick-${i}`}>{d.name}</div>
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

  // TODO: 途中段階
  // sortの内容が何故かbooleanとして認識されないので一旦any
  const createDeckListElm = (cardList: Card[]) => {
    let monsterElm = [];
    let magicElm = [];
    let trapElm = [];
    let extraElm = [];
    cardList.sort((a, b) => (a.cardType > b.cardType as any)).forEach((s, i) => {
      switch (s.cardType) {
        case CARD_TYPE.MONSTER:
          monsterElm.push(<div key={`deck-${i}`} style={{color: "saddlebrown"}}>{s.name}</div>);
          break;
        case CARD_TYPE.MAGIC:
          magicElm.push(<div key={`deck-${i}`} style={{color: "forestgreen"}}>{s.name}</div>);
          break;
        case CARD_TYPE.TRAP:
          trapElm.push(<div key={`deck-${i}`} style={{color: "mediumvioletred"}}>{s.name}</div>);
          break;
        case CARD_TYPE.EXTRA:
          extraElm.push(<div key={`deck-${i}`} style={{color: "gray"}}>{s.name}</div>);
          break;
        default:
          break;
      }
    });
    return (
      <div>
        <span>{monsterElm}</span>
        <span>{magicElm}</span>
        <span>{trapElm}</span>
        <span>{extraElm}</span>
      </div>
    )
  };

  const deckListPopover = (
    <Popover id="popover-trigger-click-root-close" title="カード種別に表示">
      {createDeckListElm(props.me.draftDeckList)}
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