import {connect} from 'react-redux';
import AppComponent from "../components/AppComponent";
import PlayerActionCreator from "../actions/PlayerActionCreator";
import Player from "../models/Player";
import * as io from "socket.io-client";

export type Socket = SocketIOClient.Socket

const socket: Socket = io.connect('http://localhost:8000');

export interface AppProps {
  socket: Socket,
  playerName: string,
  players: Player[],
  onChangePlayerName: (text: string) => {},
  onClickSendPlayerName: (text: string) => {}
}

const mapStateToProps = state => {
  return {
    socket: socket,
    playerName: state.PlayerReducer.playerName,
    players: state.PlayerReducer.players
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePlayerName: text => dispatch(PlayerActionCreator.changePlayerName(text)),
    onClickSendPlayerName: text => {
      socket.emit("LOGIN", text);
      dispatch(PlayerActionCreator.sendPlayerName(text))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)