import {LOGIN_SUCCESS} from "../constants";

class ApplicationActionCreator {
  constructor(){
  }

  public loginSuccess(data: any) {
    console.log(data);
    return {
      type: LOGIN_SUCCESS,
      payload: data
    }
  }


}

export default new ApplicationActionCreator();