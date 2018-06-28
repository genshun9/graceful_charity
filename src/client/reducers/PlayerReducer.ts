import Player from '../models/Player';
import {DRAFT, FIRST_ROUND_START, LOGIN_SUCCESS, PICK_CARD, SELECT_CARD} from "../constants/Constants";

export type NotSelect = "NotSelect";
export type Selecting = string;
export type Picked = "Picked";

export type SelectState = NotSelect | Selecting | Picked;

interface PlayerState {
  me: Player;
  randomID: string; // ログイン前に自分のIDがわからないので、ログイン時にランダムの文字列をサーバへ送る
  selectingCardID: SelectState;  // 未選択・選択・決定済みの3つの状態
}

const initState: PlayerState = {
  me: null,
  randomID: Math.random().toString(36).slice(-8),
  selectingCardID: "NotSelect"
};

export const PlayerReducer = (state: PlayerState = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const updateMe = action.payload.value.randomID === state.randomID ?
        Player.create(action.payload.value.player) : state.me;
      return Object.assign({}, state, {
        me: updateMe
      });

    case FIRST_ROUND_START:
      const firstRoundStartState = Object.assign({}, state, {
        me: Player.create(action.payload.value.find(v => v.playerID === state.me.playerID))
      });
      return firstRoundStartState;

    case SELECT_CARD:
      const selectCardState = Object.assign({}, state, {
        selectingCardID: action.payload
      });
      return selectCardState;

    case PICK_CARD:
      const pickCardState = Object.assign({}, state, {
        selectingCardID: "Picked"
      });
      return pickCardState;

    case DRAFT:
      const draftState = Object.assign({}, state, {
        me: Player.create(action.payload.value.find(v => v.playerID === state.me.playerID))
      });
      return draftState;

    default:
      return state
  }
};