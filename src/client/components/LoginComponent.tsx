import * as React from 'react';
import {LoginProps} from "../containers/LoginContainer";
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {PLAYER_MAX_NUMBER} from "../constants/ClientApplicationConstants";

const LoginComponent: React.SFC<LoginProps> = props => {
  return (
    <div>
      <br/>
      <Form inline>
        <span style={{paddingLeft: 20}}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>ユーザー名</ControlLabel>
              <span style={{paddingLeft: 10}}>
              </span>
            <FormControl type="text"
                         placeholder="名前を入力してね"
                         disabled={props.player !== null}
                         value={props.inputPlayerName}
                         onChange={e => props.onChangePlayerName((e.target as any).value)}/>
          </FormGroup>
        </span>
        <span style={{paddingLeft: 10}}>
        <Button type="submit"
                disabled={props.player !== null || props.inputPlayerName === ""}
                onClick={() => props.onClickSendPlayerName(props.inputPlayerName, props.randomID)}>
          ログインする
        </Button>
        </span>
      </Form>
      <br/>
      {props.player !== null ? <div style={{paddingLeft: 20, fontSize: 20}}>{PLAYER_MAX_NUMBER}人集まるまでお待ち下さい</div> : null}
      <br/>
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