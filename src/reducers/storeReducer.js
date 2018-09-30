import { FETCH_STORES, FETCH_COUPONS } from '../actions/types';

const initialState = {
  stores: [],
  coupons: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case FETCH_STORES:
      return {
        ...state,
        stores: action.payload
      }

      case FETCH_COUPONS:
      return {
          ...state,
          coupons: action.payload
      }

    default:
      return state;
  }
}