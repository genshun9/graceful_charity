import {connect} from 'react-redux';
import Player from "../models/Player";
import {Socket, socket} from "./AppContainer";
import DraftComponent from "../components/DraftComponent";
import {SelectState} from "../reducers/PlayerReducer";
import PlayerActionCreator from "../actions/PlayerActionCreator";

export interface DraftProps {
  socket: Socket;
  connecting: boolean;
  me: Player;
  selectingCardID: SelectState;
  players: Player[];
  onClickCard: (cardID: string) => {};
  onClickPick: (props: {cardID: string, playerID: number}) => {};
}

const mapStateToProps = state => {
  return {
    socket: socket,
    connecting: state.ApplicationReducer.connecting,
    me: state.PlayerReducer.me,
    selectingCardID: state.PlayerReducer.selectingCardID,
    players: state.ApplicationReducer.players
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCard: (cardID: string) => dispatch(PlayerActionCreator.selectCard(cardID)),
    onClickPick: (props) => {
      socket.emit("PICK", { playerID: props.playerID, name: "", cardID: props.cardID, cardURL: ""});
      dispatch(PlayerActionCreator.pickCard())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DraftComponent)