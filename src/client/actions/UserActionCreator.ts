class UserActionCreator {
  constructor() {
  }

  public changeUserName(text: string): any {
    return {
      type: 'CHANGE_USER_NAME',
      payload: text
    }
  }

  public sendUserName(text: string): any {
    return {
      type: 'SEND_USER_NAME',
      payload: text
    }
  }
}

export default new UserActionCreator();