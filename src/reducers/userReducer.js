import { CURRENT_USER, FETCH_PURCHASES } from '../actions/types';

const initialState = {
    id: '5bad33c2ee11ed0004f21472',
    purchases: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case CURRENT_USER:
      return {
        ...state,
        current: action.payload,
        id: action.payload._id
      }

      case FETCH_PURCHASES:
      return {
          ...state,
          purchases: action.payload
      }

    default:
      return state;
  }
};