import * as React from 'react';
import WithLifecycleComponent from './WithLifecycleComponent';
import {AppProps} from "../containers/AppContainer";
import LoginContainer from "../containers/LoginContainer";
import {GAME_PROGRESS} from "../constants";

const AppComponentSFC: React.SFC<AppProps> = props => {
  if (props.gameProgress === GAME_PROGRESS.NOT_LOGIN) {
    return (
      <LoginContainer/>
    )
  } else {
    return (
      <div>test</div>
    )
  }
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