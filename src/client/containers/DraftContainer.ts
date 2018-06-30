import {connect} from 'react-redux';
import Player from "../models/Player";
import {Socket, socket} from "./AppContainer";
import DraftComponent from "../components/DraftComponent";
import {SelectState} from "../reducers/PlayerReducer";
import PlayerActionCreator from "../actions/PlayerActionCreator";
import Card from "../models/Card";

export interface DraftProps {
  socket: Socket;
  connecting: boolean;
  me: Player;
  selectingCardID: SelectState;
  players: Player[];
  selectedCardID: string;
  onClickCard: (cardID: string) => {};
  onClickPick: (props: { card: Card, playerID: number }) => {};
}

const mapStateToProps = state => {
  return {
    socket: socket,
    connecting: state.ApplicationReducer.connecting,
    me: state.PlayerReducer.me,
    selectingCardID: state.PlayerReducer.selectingCardID,
    players: state.ApplicationReducer.players,
    selectedCardID: state.PlayerReducer.selectedCardID
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCard: (cardID: string) => dispatch(PlayerActionCreator.selectCard(cardID)),
    onClickPick: (props) => {
      socket.emit("PICK", {playerID: props.playerID, card: props.card});
      dispatch(PlayerActionCreator.pickCard(props.card))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DraftComponent)