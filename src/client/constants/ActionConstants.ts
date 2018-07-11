import {ClientDto} from "../dtos/index";

type ChangePlayerName = 'CHANGE_PLAYER_NAME';
type SendPlayerName = 'SEND_PLAYER_NAME';
type ChangeProgress = 'CHANGE_PROGRESS';
type SelectCard = 'SELECT_CARD';
type PickCard = 'PICK_CARD';

export type ActionType =
  ChangePlayerName
  | SendPlayerName
  | ChangeProgress
  | SelectCard
  | PickCard

export interface ActionPayload {
  type: ActionType,
  payload: any
}


export const CHANGE_PLAYER_NAME:ChangePlayerName = 'CHANGE_PLAYER_NAME';
export const SEND_PLAYER_NAME:SendPlayerName = 'SEND_PLAYER_NAME';
export const CHANGE_PROGRESS:ChangeProgress = 'CHANGE_PROGRESS';
export const SELECT_CARD:SelectCard = 'SELECT_CARD';
export const PICK_CARD:PickCard = 'PICK_CARD';

type LoginSuccess = 'LOGIN_SUCCESS';
type FirstRoundStart = 'FIRST_ROUND_START';
type SecondRoundStart = 'SECOND_ROUND_START';
type ThirdRoundStart = 'THIRD_ROUND_START';
type End = 'END';
type PickSuccess = 'PICK_SUCCESS';
type Draft = 'DRAFT';

export const LOGIN_SUCCESS:LoginSuccess = 'LOGIN_SUCCESS';
export const FIRST_ROUND_START:FirstRoundStart = 'FIRST_ROUND_START';
export const SECOND_ROUND_START:SecondRoundStart = 'SECOND_ROUND_START';
export const THIRD_ROUND_START:ThirdRoundStart = 'THIRD_ROUND_START';
export const END:End = 'END';
export const PICK_SUCCESS:PickSuccess = 'PICK_SUCCESS';
export const DRAFT:Draft = 'DRAFT';

export type SocketActionType =
  LoginSuccess
  | FirstRoundStart
  | SecondRoundStart
  | ThirdRoundStart
  | End
  | PickSuccess
  | Draft

export interface SocketActionPayload {
  type: SocketActionType,
  payload: ClientDto
}