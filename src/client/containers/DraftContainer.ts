import {connect} from 'react-redux';
import Player from "../models/Player";
import {Socket, socket} from "./AppContainer";
import DraftComponent from "../components/DraftComponent";

export interface DraftProps {
  socket: Socket;
  connecting: boolean;
  me: Player;
  players: Player[];
  onClickCard: (cardID: string) => {};
}

const mapStateToProps = state => {
  return {
    socket: socket,
    connecting: false,
    me: state.PlayerReducer.me,
    players: state.ApplicationReducer.players
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCard: (cardID: string) => {
      console.log(cardID);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DraftComponent)