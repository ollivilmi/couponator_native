import { FETCH_USER_DATA, LOGIN_AS_USER, GET_ALL_USERS } from '../actions/types';

const initialState = {
    user: '5bad33c2ee11ed0004f21472',
    users: [],
    data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case FETCH_USER_DATA:
      return {
        ...state,
        data: action.payload
      }

      case LOGIN_AS_USER:
      return {
          ...state,
          user: action.payload
      }

      case GET_ALL_USERS:
      return {
          ...state,
          users: action.payload
      }

    default:
      return state;
  }
}