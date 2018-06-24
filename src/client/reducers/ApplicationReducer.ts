interface ApplicationState {
  gameProgress: number;
}

const initState: ApplicationState = {
  gameProgress: 1
};

export const ApplicationReducer = (state: ApplicationState = initState, action) => {
  switch (action.type) {
    case 'CHANGE_PROGRESS':
      return Object.assign({}, state, {
        gameProgress: 2
      });

    default:
      return state
  }
};