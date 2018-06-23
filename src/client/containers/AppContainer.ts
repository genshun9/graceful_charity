import {connect} from 'react-redux';
import AppComponent from "../components/AppComponent";
import UserActionCreator from "../actions/UserActionCreator";
import User from "../models/User";
import * as io from "socket.io-client";

export type Socket = SocketIOClient.Socket

const socket: Socket = io.connect('http://localhost:8000');

export interface AppProps {
  socket: Socket,
  userName: string,
  users: User[],
  onChangeUserName: (text: string) => {},
  onClickSendUserName: (text: string) => {}
}

const mapStateToProps = state => {
  return {
    socket: socket,
    userName: state.UserReducer.userName,
    users: state.UserReducer.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeUserName: text => dispatch(UserActionCreator.changeUserName(text)),
    onClickSendUserName: text => {
      socket.emit("LOGIN", text);
      dispatch(UserActionCreator.sendUserName(text))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)