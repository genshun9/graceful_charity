import * as React from 'react';
import WithLifecycleComponent from './WithLifecycleComponent';
import {AppProps, Socket} from "../containers/AppContainer";
import LoginContainer from "../containers/LoginContainer";
import DraftContainer from "../containers/DraftContainer";
import DeckListContainer from "../containers/DeckListContainer";
import {
  DISCONNECT, DRAFT, END, FIRST_ROUND_START, LOGIN_FAILURE, LOGIN_SUCCESS,
  PICK_SUCCESS, SECOND_ROUND_START, THIRD_ROUND_START
} from "../../common/constants/SocketMessage";
import {GAME_PROGRESS} from "../../common/constants/Enums";
import LoginFailureComponent from "./LoginFailureComponent";
import {SocketIO} from "../../common/types/index";

const AppComponentSFC: React.SFC<AppProps> = props => {
  if (props.gameProgress === GAME_PROGRESS.NOT_LOGIN || props.gameProgress === GAME_PROGRESS.LOGIN) {
    return (
      <LoginContainer/>
    )
  } else if (
    ((props.gameProgress === GAME_PROGRESS.NOT_LOGIN || props.gameProgress === GAME_PROGRESS.LOGIN) && props.me === null)
    || props.gameProgress === GAME_PROGRESS.LOGIN_FAILURE
  ) {
    return (
      <LoginFailureComponent/>
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
      socket.on(LOGIN_SUCCESS, (data: SocketIO) => props.loginSuccess(data));
      socket.on(LOGIN_FAILURE, () => props.loginFailure());
      socket.on(FIRST_ROUND_START, (data: SocketIO) => props.firstRoundStart(data));
      socket.on(SECOND_ROUND_START, (data: SocketIO) => props.secondRoundStart(data));
      socket.on(THIRD_ROUND_START, (data: SocketIO) => props.thirdRoundStart(data));
      socket.on(END, (data: SocketIO) => props.draftEnd(data));
      socket.on(PICK_SUCCESS, (data: SocketIO) => props.pickSuccess(data));
      socket.on(DRAFT, (data: SocketIO) => props.draft(data));
      // ドラフト終了時に、ブラウザ閉じられた場合、localStorageをクリアにする
      window.addEventListener('beforeunload', (e) => {
        if (props.gameProgress === GAME_PROGRESS.END || props.gameProgress === GAME_PROGRESS.LOGIN_FAILURE) {
          window.localStorage.clear();
        } else {
          e.returnValue = 'まだドラフト中です';
        }
      }, false);
    }
  }
);

export default AppComponent