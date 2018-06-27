import * as React from 'react';
import {LoginProps} from "../containers/LoginContainer";
import DraftContainer from "../containers/DraftContainer";

const LoginComponent: React.SFC<LoginProps> = props => {
  return (
    <div>
      <DraftContainer/>

      <input disabled={props.player !== null} value={props.inputPlayerName} onChange={e => props.onChangePlayerName(e.target.value)}/>
      <button disabled={props.player !== null} onClick={() => props.onClickSendPlayerName(props.inputPlayerName, props.randomID)}>送信</button>
      {props.players.map((p, i) => (
        <div key={i}>{p.playerName}</div>
      ))}
    </div>
  )
};

export default LoginComponent