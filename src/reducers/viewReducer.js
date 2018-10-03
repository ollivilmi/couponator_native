import { TOGGLE_VIEW, BOX_VIEW, TOGGLE_NAV } from '../actions/types';

const initialState = {
  view: BOX_VIEW,
  navActive: true
};

export default function(state = initialState, action) {
  switch (action.type) {
      case TOGGLE_VIEW:
      return {
        ...state,
        view: action.payload
      }

      case TOGGLE_NAV:
      return {
        ...state,
        navActive: !state.navActive
      }

    default:
      return state;
  }
}