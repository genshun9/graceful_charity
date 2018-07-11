import {connect} from 'react-redux';
import AppComponent from "../components/AppComponent";
import * as io from "socket.io-client";
import ApplicationActionCreator from "../actions/ApplicationActionCreator";
import Player from "../models/Player";
import {PUBLIC_IP} from "../constants/ClientApplicationConstants";
import {convertFromSocketIO} from "../dtos/index";

export type Socket = SocketIOClient.Socket

// Containerの一番親であるAppContainerで定義してみる(Reducerで管理しない)
export const socket: Socket = io.connect(`http://${PUBLIC_IP}:8000`);

export interface AppProps {
  socket: Socket,
  gameProgress: number,
  connecting: boolean,
  players: Player[],
  loginSuccess: (data: any) => {},
  firstRoundStart: (data: any) => {},
  secondRoundStart: (data: any) => {},
  thirdRoundStart: (data: any) => {},
  draftEnd: (data: any) => {},
  pickSuccess: (data:any) => {},
  draft: (data: any) => {}
}

const mapStateToProps = state => {
  return {
    socket: socket,
    gameProgress: state.ApplicationReducer.gameProgress,
    connecting: state.ApplicationReducer.connecting,
    players: state.ApplicationReducer.players
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: data => dispatch(ApplicationActionCreator.loginSuccess(convertFromSocketIO(data))),
    firstRoundStart: data => dispatch(ApplicationActionCreator.firstRoundStart(convertFromSocketIO(data))),
    secondRoundStart: data => dispatch(ApplicationActionCreator.secondRoundStart(convertFromSocketIO(data))),
    thirdRoundStart: data => dispatch(ApplicationActionCreator.thirdRoundStart(convertFromSocketIO(data))),
    draftEnd: data => dispatch(ApplicationActionCreator.draftEnd(convertFromSocketIO(data))),
    pickSuccess: data => dispatch(ApplicationActionCreator.pickSuccess(convertFromSocketIO(data))),
    draft: data => dispatch(ApplicationActionCreator.draft(convertFromSocketIO(data)))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
