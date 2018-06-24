import {combineReducers} from "redux";
import {PlayerReducer} from "./PlayerReducer";
import {ApplicationReducer} from "./ApplicationReducer";

export default combineReducers({
  PlayerReducer,
  ApplicationReducer
})