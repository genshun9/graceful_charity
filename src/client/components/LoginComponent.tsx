import * as React from 'react';
import {LoginProps} from "../containers/LoginContainer";

const LoginComponent: React.SFC<LoginProps> = props => {
  return (
    <div>
      <input value={props.playerName} onChange={e => props.onChangePlayerName(e.target.value)}/>
      <button onClick={() => props.onClickSendPlayerName(props.playerName)}>送信</button>
    </div>
  )
};

export default LoginComponent