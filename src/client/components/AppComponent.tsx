import * as React from 'react';
import WithLifecycleComponent from './WithLifecycleComponent';
import {AppProps, Socket} from "../containers/AppContainer";
import LoginContainer from "../containers/LoginContainer";
import DraftContainer from "../containers/DraftContainer";
import DeckListContainer from "../containers/DeckListContainer";
import {
  DISCONNECT, DRAFT, END, FIRST_ROUND_START, LOGIN_SUCCESS,
  PICK_SUCCESS, SECOND_ROUND_START, THIRD_ROUND_START
} from "../../common/constants/SocketMessage";
import {GAME_PROGRESS} from "../../common/constants/Enums";

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
  } else if (props.gameProgress === GAME_PROGRESS.END) {
    return (
      <DeckListContainer/>
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
      socket.on(DISCONNECT, () => {});
      socket.on(LOGIN_SUCCESS, (data: any) => props.loginSuccess(data));
      socket.on(FIRST_ROUND_START, (data: any) => props.firstRoundStart(data));
      socket.on(SECOND_ROUND_START, (data: any) => props.secondRoundStart(data));
      socket.on(THIRD_ROUND_START, (data: any) => props.thirdRoundStart(data));
      socket.on(END, (data: any) => props.draftEnd(data));
      socket.on(PICK_SUCCESS, (data: any) => props.pickSuccess(data));
      socket.on(DRAFT, (data: any) => props.draft(data));
    },
    willUnmount: (props: AppProps) => {
      // TODO: 実行されない
      if (props.gameProgress === GAME_PROGRESS.END) {
        window.localStorage.clear();
      }
    }
  }
);

export default AppComponent