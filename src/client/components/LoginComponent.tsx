import * as React from 'react';
import {LoginProps} from "../containers/LoginContainer";

const LoginComponent: React.SFC<LoginProps> = props => {
  return (
    <div>
      <br/>
      <span style={{paddingLeft: 20}}>
      <input disabled={props.player !== null} value={props.inputPlayerName}
             onChange={e => props.onChangePlayerName(e.target.value)}/>
      </span>
      <span style={{paddingLeft: 20}}>
        <button disabled={props.player !== null || props.inputPlayerName === ""}
                onClick={() => props.onClickSendPlayerName(props.inputPlayerName, props.randomID)}>送信</button>
      </span>
      {props.players.map((p, i) => {
        const style = (props.player === null || p.playerID !== props.player.playerID) ? {
          color: "black",
          paddingLeft: 20
        } : {color: "red", paddingLeft: 20};
        return (
          <div key={i} style={style}>{p.playerName}</div>
        )
      })}
    </div>
  )
};

export default LoginComponent