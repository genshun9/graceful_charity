import {connect} from 'react-redux';
import AppComponent from "../components/AppComponent";
import * as io from "socket.io-client";
import ApplicationActionCreator from "../actions/ApplicationActionCreator";

export type Socket = SocketIOClient.Socket

// Containerの一番親であるAppContainerで定義してみる(Reducerで管理しない)
export const socket: Socket = io.connect('http://localhost:8000');

export interface AppProps {
  socket: Socket,
  gameProgress: number,
  loginSuccess: (data:any) => {}
}

const mapStateToProps = state => {
  return {
    socket: socket,
    gameProgress: state.ApplicationReducer.gameProgress
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: data => dispatch(ApplicationActionCreator.loginSuccess(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)