import {SocketIO} from "../../common/types";

type CHANGE_PLAYER_NAME = 'CHANGE_PLAYER_NAME';
type SEND_PLAYER_NAME = 'SEND_PLAYER_NAME';
type CHANGE_PROGRESS = 'CHANGE_PROGRESS';
type SELECT_CARD = 'SELECT_CARD';
type PICK_CARD = 'PICK_CARD';
type LOGIN_SUCCESS = 'LOGIN_SUCCESS';
type FIRST_ROUND_START = 'FIRST_ROUND_START';
type SECOND_ROUND_START = 'SECOND_ROUND_START';
type THIRD_ROUND_START = 'THIRD_ROUND_START';
type END = 'END';
type PICK_SUCCESS = 'PICK_SUCCESS';
type DRAFT = 'DRAFT';

export type ActionType =
  CHANGE_PLAYER_NAME
  | SEND_PLAYER_NAME
  | CHANGE_PROGRESS
  | SELECT_CARD
  | PICK_CARD
  | LOGIN_SUCCESS
  | FIRST_ROUND_START
  | SECOND_ROUND_START
  | THIRD_ROUND_START
  | END
  | PICK_SUCCESS
  | DRAFT

export type SocketActionType =
  LOGIN_SUCCESS
  | FIRST_ROUND_START
  | SECOND_ROUND_START
  | THIRD_ROUND_START
  | END
  | PICK_SUCCESS
  | DRAFT

export interface ActionPayload {
  type: ActionType,
  payload: any
}

export interface SocketActionPayload {
  type: SocketActionType,
  payload: SocketIO
}