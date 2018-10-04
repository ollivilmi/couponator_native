import { FETCH_BOXES, OPEN_BOX, CLOSE_BOX, TOGGLE_NAV, OPENING_VIEW, BOX_VIEW, TOGGLE_VIEW, OPEN_COUPON } from './types';

export const fetchBoxes = user => dispatch => {
  fetch(`https://couponator-api.herokuapp.com/users/${user}/lootboxes`)
    .then(res => res.json())
    .then(boxes => {
      dispatch({
      type: FETCH_BOXES,
      payload: boxes
      })
    }
  );
};

export const openBox = (lootboxId, progress) => dispatch => {
    if (progress < 1) {
      return;
    }
    fetch(`https://couponator-api.herokuapp.com/lootboxes/${lootboxId}/open`)
    .then(res => res.json())
    .then(coupons => {
      console.log(coupons);
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

export const openCoupon = () => dispatch => {
  dispatch({
    type: OPEN_COUPON
  })
};

export const closeBox = () => dispatch => {
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
