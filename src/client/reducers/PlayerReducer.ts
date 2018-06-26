import Player from '../models/Player';
import {FIRST_ROUND_START, GAME_PROGRESS, LOGIN_SUCCESS} from "../constants/Constants";

interface PlayerState {
  me: Player;
  randomID: string; // ログイン前に自分のIDがわからないので、ログイン時にランダムの文字列をサーバへ送る
  selectingCardID: string;
}

const initState: PlayerState = {
  me: null,
  randomID: Math.random().toString(36).slice(-8),
  selectingCardID: ''
};

export const PlayerReducer = (state: PlayerState = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const updateMe = action.payload.value.randomID === state.randomID ?
        Player.create(action.payload.value.player) : state.me;
      console.log(updateMe);
      return Object.assign({}, state, {
        me: updateMe
      });

    case FIRST_ROUND_START:
      return Object.assign({}, state, {
        me: null
      });

    default:
      return state
  }
};