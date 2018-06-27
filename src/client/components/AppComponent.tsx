import * as React from 'react';
import WithLifecycleComponent from './WithLifecycleComponent';
import {AppProps, Socket} from "../containers/AppContainer";
import LoginContainer from "../containers/LoginContainer";
import {FIRST_ROUND_START, GAME_PROGRESS, LOGIN_SUCCESS} from "../constants/Constants";
import DraftContainer from "../containers/DraftContainer";

const AppComponentSFC: React.SFC<AppProps> = props => {
  if (props.gameProgress === GAME_PROGRESS.NOT_LOGIN || props.gameProgress === GAME_PROGRESS.LOGIN) {
    return (
      <LoginContainer/>
    )
  } else if (props.gameProgress === GAME_PROGRESS.FIRST_ROUND
    || props.gameProgress === GAME_PROGRESS.SECOND_ROUND
    || props.gameProgress === GAME_PROGRESS.THIRD_ROUND
  ) {
    return (
      <DraftContainer/>
    )
  } else {
    return (
      <div>予期せぬエラー</div>
    )
  }
};

const AppComponent = WithLifecycleComponent<AppProps>(
  AppComponentSFC, {
    willMount: (props: AppProps) => {
      const socket:Socket = props.socket;
      socket.on('connected', (name: string) => {});
      socket.on('disconnect', () => {});
      socket.on('publish', (data: any) => {});
      socket.on(LOGIN_SUCCESS, (data: any) => props.loginSuccess(data));
      socket.on(FIRST_ROUND_START, (data: any) => props.firstRoundStart(data));
    }
  }
);

export default AppComponent