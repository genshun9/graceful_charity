import {
  CHANGE_PLAYER_NAME, GAME_PROGRESS, FIRST_ROUND_START, LOGIN_SUCCESS, SEND_PLAYER_NAME, SECOND_ROUND_START,
  THIRD_ROUND_START, PICK_SUCCESS, DRAFT, END
} from "../constants/Constants";
import Player from "../models/Player";

interface ApplicationState {
  inputPlayerName: string;
  connecting: boolean;
  gameProgress: number;
  players: Player[]
}

const initState: ApplicationState = {
  inputPlayerName: "",
  connecting: false,
  gameProgress: GAME_PROGRESS.NOT_LOGIN,
  players: []
};

export const ApplicationReducer = (state: ApplicationState = initState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER_NAME:
      return Object.assign({}, state, {
        inputPlayerName: action.payload
      });

    case SEND_PLAYER_NAME:
      return Object.assign({}, state, {
        inputPlayerName: "",
        connecting: true
      });

    case LOGIN_SUCCESS:
      const loginSuccessState = Object.assign({}, state, {
        gameProgress: GAME_PROGRESS.LOGIN,
        connecting: false,
        players: action.payload.value.players.map(p => Player.create(p))
      });
      return loginSuccessState;

    case FIRST_ROUND_START:
      const firstRoundStartState = Object.assign({}, state, {
        gameProgress: GAME_PROGRESS.FIRST_ROUND,
        connecting: false,
        players: action.payload.value.map(p => Player.create(p))
      });
      return firstRoundStartState;

    case SECOND_ROUND_START:
      const secondRoundStartState = Object.assign({}, state, {
      gameProgress: GAME_PROGRESS.SECOND_ROUND,
      connecting: false,
      players: action.payload.value.map(p => Player.create(p))
    });
      return secondRoundStartState;

    case THIRD_ROUND_START:
      const thirdRoundStartState = Object.assign({}, state, {
        gameProgress: GAME_PROGRESS.THIRD_ROUND,
        connecting: false,
        players: action.payload.value.map(p => Player.create(p))
      });
      return thirdRoundStartState;

    case END:
      const lastState = Object.assign({}, state, {
        gameProgress: GAME_PROGRESS.END,
        connecting: false,
        players: action.payload.value.map(p => Player.create(p))
      });
      return lastState;

    case PICK_SUCCESS:
      // 本来はaction.payload.playerIDに合致するユーザのみconnectingをfalseにしたかった。
      return state;

    case DRAFT:
      const draftState = Object.assign({}, state, {
        players: action.payload.value.map(p => Player.create(p))
      });
      return draftState;

    default:
      return state
  }
};