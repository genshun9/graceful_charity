import * as React from 'react';
import {LoginProps} from "../containers/LoginContainer";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

const LoginComponent: React.SFC<LoginProps> = props => {
  const popover = (
    <Popover id="popover-trigger-click-root-close" title="デッキレシピ">
      <strong>Holy guacamole!</strong>
    </Popover>
  );
  return (
    <div>
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={popover}>
        <Button>デッキレシピ</Button>
      </OverlayTrigger>
      <input disabled={props.player !== null} value={props.inputPlayerName} onChange={e => props.onChangePlayerName(e.target.value)}/>
      <button disabled={props.player !== null || props.inputPlayerName === ""} onClick={() => props.onClickSendPlayerName(props.inputPlayerName, props.randomID)}>送信</button>
      {props.players.map((p, i) => (
        <div key={i}>{p.playerName}</div>
      ))}
    </div>
  )
};

export default LoginComponent