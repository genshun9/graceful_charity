import {connect} from 'react-redux';
import Player from "../models/Player";
import {Socket, socket} from "./AppContainer";
import DraftComponent from "../components/DraftComponent";
import {SelectState} from "../reducers/PlayerReducer";
import PlayerActionCreator from "../actions/PlayerActionCreator";
import Card from "../models/Card";
import {PICK} from "../../common/constants/SocketMessage";

export interface DraftProps {
  socket: Socket;
  connecting: boolean;
  me: Player;
  selectingCardID: SelectState;
  players: Player[];
  pickedPlayerIDs: number[];
  selectedCardID: string;
  gameProgress: number;
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
    pickedPlayerIDs: state.ApplicationReducer.pickedPlayerIDs,
    selectedCardID: state.PlayerReducer.selectedCardID,
    gameProgress: state.ApplicationReducer.gameProgress
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCard: (cardID: string) => dispatch(PlayerActionCreator.selectCard(cardID)),
    onClickPick: (props) => {
      socket.emit(PICK, {playerID: props.playerID, card: props.card});
      dispatch(PlayerActionCreator.pickCard(props.card))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DraftComponent)