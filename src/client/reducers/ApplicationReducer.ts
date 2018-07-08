import Player from "../models/Player";
import {GAME_PROGRESS} from "../../common/constants/Enums";
import {
  ActionPayload,
  CHANGE_PLAYER_NAME, DRAFT, END, FIRST_ROUND_START, LOGIN_SUCCESS, PICK_SUCCESS, SECOND_ROUND_START,
  SEND_PLAYER_NAME, SocketActionPayload, THIRD_ROUND_START
} from "../constants/ActionConstants";

interface ApplicationState {
  inputPlayerName: string;
  connecting: boolean;
  gameProgress: number;
  players: Player[],
  pickedPlayerIDs: number[]
}

const initState: ApplicationState = {
  inputPlayerName: "",
  connecting: false,
  gameProgress: GAME_PROGRESS.NOT_LOGIN,
  players: [],
  pickedPlayerIDs: []
};

export const ApplicationReducer = (state: ApplicationState = initState, action: ActionPayload | SocketActionPayload) => {
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
        players: (action as SocketActionPayload).payload.players.map(p => Player.create(p))
      });
      return loginSuccessState;

    case FIRST_ROUND_START:
      const firstRoundStartState = Object.assign({}, state, {
        gameProgress: GAME_PROGRESS.FIRST_ROUND,
        connecting: false,
        players: (action as SocketActionPayload).payload.players.map(p => Player.create(p))
      });
      return firstRoundStartState;

    case SECOND_ROUND_START:
      const secondRoundStartState = Object.assign({}, state, {
      gameProgress: GAME_PROGRESS.SECOND_ROUND,
      connecting: false,
      players: (action as SocketActionPayload).payload.players.map(p => Player.create(p))
    });
      return secondRoundStartState;

    case THIRD_ROUND_START:
      const thirdRoundStartState = Object.assign({}, state, {
        gameProgress: GAME_PROGRESS.THIRD_ROUND,
        connecting: false,
        players: (action as SocketActionPayload).payload.players.map(p => Player.create(p))
      });
      return thirdRoundStartState;

    case END:
      const lastState = Object.assign({}, state, {
        gameProgress: GAME_PROGRESS.END,
        connecting: false,
        players: (action as SocketActionPayload).payload.players.map(p => Player.create(p))
      });
      return lastState;

    case PICK_SUCCESS:
      // 本来はaction.payload.playerIDに合致するユーザのみconnectingをfalseにしたかった。
      state.pickedPlayerIDs.push((action as SocketActionPayload).payload.playerID);
      return state;

    case DRAFT:
      const draftState = Object.assign({}, state, {
        players: (action as SocketActionPayload).payload.players.map(p => Player.create(p)),
        pickedPlayerIDs: []
      });
      return draftState;

    default:
      return state
  }
};