import { CURRENT_USER, ALL_USERS } from '../actions/types';

const initialState = {
    id: '5bad33c2ee11ed0004f21472'
};

export default function(state = initialState, action) {
  switch (action.type) {
      case CURRENT_USER:
      return {
        ...state,
        current: action.payload,
        id: action.payload._id
      }

    default:
      return state;
  }
};