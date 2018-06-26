import Player from '../models/Player';
import {FIRST_ROUND_START, GAME_PROGRESS, LOGIN_SUCCESS} from "../constants/Constants";

interface PlayerState {
  me: Player;
  selectingCardID: string;
}

const initState: PlayerState = {
  me: null,
  selectingCardID: ''
};

export const PlayerReducer = (state: PlayerState = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        me: null
      });

    case FIRST_ROUND_START:
      return Object.assign({}, state, {
        me: null
      });

    default:
      return state
  }
};