import {
  CHANGE_PLAYER_NAME, DRAFT, FIRST_ROUND_START, LOGIN_SUCCESS, PICK_SUCCESS,
  SEND_PLAYER_NAME
} from "../constants/Constants";

class ApplicationActionCreator {
  constructor(){
  }

  public changePlayerName(text: string) {
    return {
      type: CHANGE_PLAYER_NAME,
      payload: text
    }
  }

  public sendPlayerName(text: string) {
    return {
      type: SEND_PLAYER_NAME,
      payload: text
    }
  }

  public loginSuccess(data: any) {
    return {
      type: LOGIN_SUCCESS,
      payload: data
    }
  }

  public firstRoundStart(data: any) {
    return {
      type: FIRST_ROUND_START,
      payload: data
    }
  }

  public pickSuccess(data: any) {
    return {
      type: PICK_SUCCESS,
      payload: data
    }
  }

  public draft(data: any) {
    return {
      type: DRAFT,
      payload: data
    }
  }
}

export default new ApplicationActionCreator();