import * as React from 'react';
import WithLifecycleComponent from './WithLifecycleComponent';
import {AppProps} from "../containers/AppContainer";

const AppComponentSFC: React.SFC<AppProps> = props => {
  return (
    <div>
      <input value={props.userName} onChange={e => props.onChangeUserName(e.target.value)}/>
      <button onClick={() => props.onClickSendUserName(props.userName)}>送信</button>
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