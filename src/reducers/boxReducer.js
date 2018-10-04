import { FETCH_BOXES, OPEN_BOX, CLOSE_BOX, OPEN_COUPON } from '../actions/types';

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

    case OPEN_COUPON:
    return {
      ...state,
      coupons: state.coupons.slice(1)
    }

    default:
      return state;
  }
}