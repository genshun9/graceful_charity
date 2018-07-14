import {connect} from 'react-redux';
import AppComponent from "../components/AppComponent";
import * as io from "socket.io-client";
import ApplicationActionCreator from "../actions/ApplicationActionCreator";
import Player from "../models/Player";
import {PORT, PUBLIC_IP} from "../constants/ClientApplicationConstants";
import {convertFromSocketIO} from "../dtos";
import {SocketIO} from "../../common/types";

export type Socket = SocketIOClient.Socket

// Containerの一番親であるAppContainerで定義してみる(Reducerで管理しない)
export const socket: Socket = io.connect(`http://${PUBLIC_IP}:${PORT}`);

export interface AppProps {
  socket: Socket,
  me: Player,
  gameProgress: number,
  connecting: boolean,
  players: Player[],
  loginSuccess: (data: SocketIO) => {},
  loginFailure: () => {},
  firstRoundStart: (data: SocketIO) => {},
  secondRoundStart: (data: SocketIO) => {},
  thirdRoundStart: (data: SocketIO) => {},
  draftEnd: (data: SocketIO) => {},
  pickSuccess: (data:SocketIO) => {},
  draft: (data: SocketIO) => {}
}

const mapStateToProps = state => {
  return {
    socket: socket,
    me: state.PlayerReducer.me,
    gameProgress: state.ApplicationReducer.gameProgress,
    connecting: state.ApplicationReducer.connecting,
    players: state.ApplicationReducer.players
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: data => dispatch(ApplicationActionCreator.loginSuccess(convertFromSocketIO(data))),
    loginFailure: () => dispatch(ApplicationActionCreator.loginFailure()),
    firstRoundStart: data => dispatch(ApplicationActionCreator.firstRoundStart(convertFromSocketIO(data))),
    secondRoundStart: data => dispatch(ApplicationActionCreator.secondRoundStart(convertFromSocketIO(data))),
    thirdRoundStart: data => dispatch(ApplicationActionCreator.thirdRoundStart(convertFromSocketIO(data))),
    draftEnd: data => dispatch(ApplicationActionCreator.draftEnd(convertFromSocketIO(data))),
    pickSuccess: data => dispatch(ApplicationActionCreator.pickSuccess(convertFromSocketIO(data))),
    draft: data => dispatch(ApplicationActionCreator.draft(convertFromSocketIO(data)))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
