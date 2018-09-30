import { FETCH_STORES, FETCH_COUPONS, TOGGLE_NAV } from './types';

export const fetchStores = () => dispatch => {
  fetch('https://couponator-api.herokuapp.com/stores/near?lng=24.80539&lat=60.2213')
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
    fetch('https://couponator-api.herokuapp.com/stores/5ba7dec3069dfb1a18aa6da0/coupons')
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
    fetch('https://couponator-api.herokuapp.com/users/5bad33c2ee11ed0004f21472/coupons')
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