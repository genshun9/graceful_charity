interface UserState {
  userName: string
}

const initState: UserState = {
  userName: ""
};

export const UserReducer = (state: UserState = initState, action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
        return Object.assign({}, state, {
          userName: action.payload
        });

    default:
      return state
  }
};