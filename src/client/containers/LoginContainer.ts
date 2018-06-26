import {connect} from 'react-redux';
import Player from "../models/Player";
import LoginComponent from "../components/LoginComponent";
import {socket} from "./AppContainer";
import ApplicationActionCreator from "../actions/ApplicationActionCreator";

export interface LoginProps {
  inputPlayerName: string,
  players: Player[],
  onChangePlayerName: (text: string) => {},
  onClickSendPlayerName: (text: string) => {}
}

const mapStateToProps = state => {
  return {
    inputPlayerName: state.ApplicationReducer.inputPlayerName,
    players: state.ApplicationReducer.players
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePlayerName: text => dispatch(ApplicationActionCreator.changePlayerName(text)),
    onClickSendPlayerName: text => {
      socket.emit("LOGIN", text);
      dispatch(ApplicationActionCreator.sendPlayerName(text))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)