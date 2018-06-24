import * as React from 'react';
import WithLifecycleComponent from './WithLifecycleComponent';
import {AppProps} from "../containers/AppContainer";

const AppComponentSFC: React.SFC<AppProps> = props => {
  return (
    <div>
      <input value={props.playerName} onChange={e => props.onChangePlayerName(e.target.value)}/>
      <button onClick={() => props.onClickSendPlayerName(props.playerName)}>送信</button>
    </div>
  )
};

const AppComponent = WithLifecycleComponent<AppProps>(
  AppComponentSFC, {
    willMount: (props: AppProps) => {
      const socket = props.socket;
      socket.on('connected', (name: string) => {});
      socket.on('disconnect', () => {});
      socket.on('publish', (data: any) => {});
    }
  }
);

export default AppComponent