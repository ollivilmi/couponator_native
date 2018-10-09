import { CURRENT_USER, FETCH_PURCHASES } from '../actions/types';

const initialState = {
    id: '5bb5c5fbcb49873e508f0770',
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