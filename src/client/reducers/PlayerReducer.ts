import Player from '../models/Player';
import {
  DRAFT, END, FIRST_ROUND_START, LOGIN_SUCCESS, PICK_CARD, SECOND_ROUND_START,
  SELECT_CARD, THIRD_ROUND_START
} from "../constants/Constants";

export type NotSelect = "NotSelect";
export type Selecting = string;
export type Picked = "Picked";

export type SelectState = NotSelect | Selecting | Picked;

interface PlayerState {
  me: Player;
  randomID: string; // ログイン前に自分のIDがわからないので、ログイン時にランダムの文字列をサーバへ送る
  selectingCardID: SelectState;  // 未選択・選択・決定済みの3つの状態
  selectedCardID: string; // 選択後次のピックが始まるまでに、選択したカードの情報をviewで使うため
}

const initState: PlayerState = {
  me: null,
  randomID: Math.random().toString(36).slice(-8),
  selectingCardID: "NotSelect",
  selectedCardID: ""
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

    case SECOND_ROUND_START:
      const secondRoundStartState = Object.assign({}, state, {
        me: Player.create(action.payload.value.find(v => v.playerID === state.me.playerID))
      });
      return secondRoundStartState;

    case THIRD_ROUND_START:
      const thirdRoundStartState = Object.assign({}, state, {
        me: Player.create(action.payload.value.find(v => v.playerID === state.me.playerID))
      });
      return thirdRoundStartState;

    case END:
      const lastPlayerState = Object.assign({}, state, {
        me: Player.create(action.payload.value.find(v => v.playerID === state.me.playerID))
      });
      return lastPlayerState;

    case SELECT_CARD:
      const selectCardState = Object.assign({}, state, {
        selectingCardID: action.payload
      });
      return selectCardState;

    case PICK_CARD:
      const pickCardState = Object.assign({}, state, {
        selectingCardID: "Picked",
        selectedCardID: action.payload.value.cardID
      });
      return pickCardState;

    case DRAFT:
      const draftState = Object.assign({}, state, {
        me: Player.create(action.payload.value.find(v => v.playerID === state.me.playerID)),
        selectingCardID: "NotSelect",
        selectedCardID: ""
      });
      return draftState;

    default:
      return state
  }
};