import {connect} from 'react-redux';
import Player from "../models/Player";
import DeckListComponent from "../components/DeckListComponent";

export interface DeckListProps {
  me: Player;
}

const mapStateToProps = state => {
  return {
    me: state.PlayerReducer.me,
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckListComponent)