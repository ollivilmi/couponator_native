import { FETCH_STORES, FETCH_COUPONS, TOGGLE_NAV } from './types';

// Could be taken from the phone. If no coords, just use default
const coords = 'lng=24.80539&lat=60.2213';
const user = '5bb5c5fbcb49873e508f0770';

export const fetchStores = () => dispatch => {
  fetch(`https://couponator-api.herokuapp.com/stores/near?${coords}`)
    .then(res => res.json())
    .then(stores => {
        dispatch({
            type: FETCH_STORES,
            payload: stores
        })
    }
  );
};

export const fetchCouponsForStore = store => dispatch => {
    fetch(`https://couponator-api.herokuapp.com/stores/${store._id}/coupons`)
        .then(res => res.json())    
            .then(coupons => {
            dispatch({
                type: FETCH_COUPONS,
                payload: coupons
            }),
            dispatch({
                type: TOGGLE_NAV
            })
        }
    );
};

export const fetchCouponsForUser = user => dispatch => {
    fetch(`https://couponator-api.herokuapp.com/users/${user}/coupons`)
        .then(res => res.json())    
        .then(stores =>
        dispatch({
            type: FETCH_COUPONS,
            payload: stores
        })
    );
}