import {connect} from 'react-redux';
import PlayerActionCreator from "../actions/PlayerActionCreator";
import Player from "../models/Player";
import LoginComponent from "../components/LoginComponent";
import {Socket, socket} from "./AppContainer";

export interface LoginProps {
  socket: Socket,
  playerName: string,
  players: Player[],
  onChangePlayerName: (text: string) => {},
  onClickSendPlayerName: (text: string) => {}
}

const mapStateToProps = state => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)