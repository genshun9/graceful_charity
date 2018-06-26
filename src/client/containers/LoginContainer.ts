import {connect} from 'react-redux';
import Player from "../models/Player";
import LoginComponent from "../components/LoginComponent";
import {socket} from "./AppContainer";
import ApplicationActionCreator from "../actions/ApplicationActionCreator";

export interface LoginProps {
  inputPlayerName: string,
  randomID: string,
  player: Player,
  players: Player[],
  onChangePlayerName: (text: string) => {},
  onClickSendPlayerName: (text: string, randomID: string) => {}
}

const mapStateToProps = state => {
  return {
    inputPlayerName: state.ApplicationReducer.inputPlayerName,
    player: state.PlayerReducer.me,
    randomID: state.PlayerReducer.randomID,
    players: state.ApplicationReducer.players
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePlayerName: text => dispatch(ApplicationActionCreator.changePlayerName(text)),
    onClickSendPlayerName: (text, randomID) => {
      socket.emit("LOGIN", {text, randomID});
      dispatch(ApplicationActionCreator.sendPlayerName(text))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)