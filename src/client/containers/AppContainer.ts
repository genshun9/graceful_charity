import {connect} from 'react-redux';
import AppComponent from "../components/AppComponent";
import * as io from "socket.io-client";
import ApplicationActionCreator from "../actions/ApplicationActionCreator";
import Player from "../models/Player";
import {PUBLIC_IP} from "../constants/Constants";

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
    loginSuccess: data => dispatch(ApplicationActionCreator.loginSuccess(data)),
    firstRoundStart: data => dispatch(ApplicationActionCreator.firstRoundStart(data)),
    secondRoundStart: data => dispatch(ApplicationActionCreator.secondRoundStart(data)),
    thirdRoundStart: data => dispatch(ApplicationActionCreator.thirdRoundStart(data)),
    pickSuccess: data => dispatch(ApplicationActionCreator.pickSuccess(data)),
    draft: data => dispatch(ApplicationActionCreator.draft(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
