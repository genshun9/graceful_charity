import Player from '../models/Player';
import {CHANGE_PLAYER_NAME, SEND_PLAYER_NAME} from "../constants";

interface PlayerState {
  playerName: string,
  players: Player[]
}

const initState: PlayerState = {
  playerName: "",
  players: []
};

export const PlayerReducer = (state: PlayerState = initState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER_NAME:
        return Object.assign({}, state, {
          playerName: action.payload
        });

    case SEND_PLAYER_NAME:
      return Object.assign({}, state, {
        playerName: ""
      });

    default:
      return state
  }
};