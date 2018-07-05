import {
  ActionPayload, CHANGE_PLAYER_NAME, END, LOGIN_SUCCESS, PICK_SUCCESS, SEND_PLAYER_NAME,
  SocketActionPayload, THIRD_ROUND_START, DRAFT, FIRST_ROUND_START, SECOND_ROUND_START
} from "../constants/ActionConstants";
import {ClientDto} from "../dtos/index";

class ApplicationActionCreator {
  constructor(){
  }

  public changePlayerName(text: string):ActionPayload {
    return {
      type: CHANGE_PLAYER_NAME,
      payload: text
    }
  }

  public sendPlayerName(text: string):ActionPayload {
    return {
      type: SEND_PLAYER_NAME,
      payload: text
    }
  }

  public loginSuccess(data: ClientDto):SocketActionPayload {
    return {
      type: LOGIN_SUCCESS,
      payload: data
    }
  }

  public firstRoundStart(data: ClientDto):SocketActionPayload {
    return {
      type: FIRST_ROUND_START,
      payload: data
    }
  }

  public secondRoundStart(data: ClientDto):SocketActionPayload {
    return {
      type: SECOND_ROUND_START,
      payload: data
    }
  }

  public thirdRoundStart(data: ClientDto):SocketActionPayload {
    return {
      type: THIRD_ROUND_START,
      payload: data
    }
  }

  public draftEnd(data: ClientDto):SocketActionPayload {
    return {
      type: END,
      payload: data
    }
  }

  public pickSuccess(data: any):SocketActionPayload {
    return {
      type: PICK_SUCCESS,
      payload: data
    }
  }

  public draft(data: any):SocketActionPayload {
    return {
      type: DRAFT,
      payload: data
    }
  }
}

export default new ApplicationActionCreator();