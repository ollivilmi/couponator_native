import { FETCH_STORES, FETCH_COUPONS, TOGGLE_NAV } from './types';

export const fetchStores = () => dispatch => {
  fetch('../stores.json')
    .then(res => res.json())
    .then(stores =>
    dispatch({
        type: FETCH_STORES,
        payload: stores
    })
  );
};

export const fetchCouponsForStore = store => dispatch => {
    fetch('../coupons.json')
        .then(res => res.json())    
        .then(stores =>
        dispatch({
            type: FETCH_COUPONS,
            payload: stores
        }),
        dispatch({
            type: TOGGLE_NAV
        })
    );
};

export const fetchCouponsForUser = user => dispatch => {
    // At the moment just fetches the same coupons. Should use different API
    fetch('../coupons.json')
        .then(res => res.json())    
        .then(stores =>
        dispatch({
            type: FETCH_COUPONS,
            payload: stores
        }),
        dispatch({
            type: TOGGLE_NAV
        })
    );
}