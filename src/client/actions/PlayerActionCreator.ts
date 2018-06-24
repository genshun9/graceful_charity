class PlayerActionCreator {
  constructor() {
  }

  public changePlayerName(text: string): any {
    return {
      type: 'CHANGE_PLAYER_NAME',
      payload: text
    }
  }

  public sendPlayerName(text: string): any {
    return {
      type: 'SEND_PLAYER_NAME',
      payload: text
    }
  }
}

export default new PlayerActionCreator();