import { FETCH_BOXES, OPEN_BOX, CLOSE_BOX, TOGGLE_NAV, OPENING_VIEW, BOX_VIEW, TOGGLE_VIEW } from './types';

export const fetchBoxes = () => dispatch => {
  fetch('https://couponator-api.herokuapp.com/users/5bad33c2ee11ed0004f21472/lootboxes')
    .then(res => res.json())
    .then(boxes => {
      dispatch({
      type: FETCH_BOXES,
      payload: boxes
      })
    }
  );
};

export const openBox = box => dispatch => {
    fetch('https://couponator-api.herokuapp.com/users/5bad33c2ee11ed0004f21472/lootboxes')
    .then(res => res.json())
    .then(coupons => {
      dispatch({
        type: OPEN_BOX,
        payload: coupons
      })
      dispatch({
        type: TOGGLE_NAV
      })
      dispatch({
        type: TOGGLE_VIEW,
        payload: OPENING_VIEW
      })
    }
  );
};

export const closeBox = () => dispatch => {
  console.log("Closing box and clearing coupons from state");
  dispatch({
      type: CLOSE_BOX
  })
  dispatch({
    type: TOGGLE_NAV
  })
  dispatch({
    type: TOGGLE_VIEW,
    payload: BOX_VIEW
  })
};
