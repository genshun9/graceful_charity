import User from '../models/User';

interface UserState {
  userName: string,
  users: User[]
}

const initState: UserState = {
  userName: "",
  users: []
};

export const UserReducer = (state: UserState = initState, action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
        return Object.assign({}, state, {
          userName: action.payload
        });

    case 'SEND_USER_NAME':
      return Object.assign({}, state, {
        userName: ""
      });

    default:
      return state
  }
};