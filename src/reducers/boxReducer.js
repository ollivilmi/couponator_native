import { FETCH_BOXES, OPEN_BOX, CLOSE_BOX } from '../actions/types';

const initialState = {
  boxes: [],
  coupons: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOXES:
      return {
        ...state,
        boxes: action.payload
      };

    case OPEN_BOX:
    return {
      ...state,
      coupons: action.payload
    };

    case CLOSE_BOX:
    return {
      ...state,
      coupons: []
    }

    default:
      return state;
  }
}