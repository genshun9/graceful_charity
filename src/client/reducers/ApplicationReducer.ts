import {CHANGE_PROGRESS, GAME_PROGRESS} from "../constants";

interface ApplicationState {
  gameProgress: number;
}

const initState: ApplicationState = {
  gameProgress: GAME_PROGRESS.NOT_LOGIN
};

export const ApplicationReducer = (state: ApplicationState = initState, action) => {
  switch (action.type) {
    case CHANGE_PROGRESS:
      return Object.assign({}, state, {
        gameProgress: GAME_PROGRESS.LOGIN
      });

    default:
      return state
  }
};