export const GAME_PROGRESS = {
  NOT_LOGIN: 1,
  LOGIN: 2,
  FIRST_ROUND: 3,
  SECOND_ROUND: 4,
  THIRD_ROUND: 5
};

export const CHANGE_PLAYER_NAME:string = 'CHANGE_PLAYER_NAME';
export const SEND_PLAYER_NAME:string = 'SEND_PLAYER_NAME';
export const CHANGE_PROGRESS:string = 'CHANGE_PROGRESS';

export const SELECT_CARD:string = 'SELECT_CARD';
export const PICK_CARD:string = 'PICK_CARD';

// socketio関連のメッセージ
export const LOGIN_SUCCESS:string = 'LOGIN_SUCCESS';
export const FIRST_ROUND_START:string = 'FIRST_ROUND_START';
export const SECOND_ROUND_START:string = 'SECOND_ROUND_START';
export const THIRD_ROUND_START:string = 'THIRD_ROUND_START';