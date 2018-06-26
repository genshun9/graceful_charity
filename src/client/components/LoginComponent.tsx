import * as React from 'react';
import {LoginProps} from "../containers/LoginContainer";

const CardComponent:any = (src, key) => {
  return (
    <span key={key} style={{padding: 4}}>
      {/*<label style={{paddingLeft: 100}}>*/}
        {/*<input type="radio" value={src}/>*/}
      {/*</label>*/}
      <img src={`../../../src/assets/${src}.jpg`} style={{width: 160, height: 232}} onClick={() => console.log(src)}/>
    </span>
  )
};

const LoginComponent: React.SFC<LoginProps> = props => {
  const src = ['4HZgkF5eTAsS', '4Sq6hpEqdAsS', '8lTB9DmqJh1F'];
  return (
    <div>
      {/****試しに作成****/}
      {src.map((s,i) => (
        CardComponent(s, i)
      ))}
      {/****ここまで****/}

      <input disabled={props.player !== null} value={props.inputPlayerName} onChange={e => props.onChangePlayerName(e.target.value)}/>
      <button disabled={props.player !== null} onClick={() => props.onClickSendPlayerName(props.inputPlayerName, props.randomID)}>送信</button>
      {props.players.map((p, i) => (
        <div key={i}>{p.playerName}</div>
      ))}
    </div>
  )
};

export default LoginComponent