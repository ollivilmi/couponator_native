import { FETCH_STORES, FETCH_COUPONS, TOGGLE_NAV } from './types';

// Could be taken from the phone. If no coords, just use default
const coords = 'lng=24.80539&lat=60.2213';
const user = '5bad33c2ee11ed0004f21472';

export const fetchStores = () => dispatch => {
  fetch(`https://couponator-api.herokuapp.com/stores/near?${coords}`)
    .then(res => res.json())
    .then(stores => {
        console.log(stores);
        dispatch({
            type: FETCH_STORES,
            payload: stores
        })
    }
  );
};

export const fetchCouponsForStore = store => dispatch => {
    console.log(store);
    fetch(`https://couponator-api.herokuapp.com/stores/${store.id}/coupons`)
        .then(res => res.json())    
            .then(stores => {
            console.log(stores);
            dispatch({
                type: FETCH_COUPONS,
                payload: stores
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
        }),
        dispatch({
            type: TOGGLE_NAV
        })
    );
}