import { CURRENT_USER, FETCH_PURCHASES } from "./types";

export const loginAsUser = userId => dispatch => {
    fetch(`https://couponator-api.herokuapp.com/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
            type: CURRENT_USER,
            payload: data
            })
        }
    );
};

export const fetchPurchases = userId => dispatch => {
    fetch(`https://couponator-api.herokuapp.com/users/${userId}/purchases`)
        .then(res => res.json())
        .then(data => {
            dispatch({
            type: FETCH_PURCHASES,
            payload: data
            })
        }
    );
};

export const addPurchase = (amount, userId, storeId) => dispatch => {
    fetch("https://couponator-api.herokuapp.com/purchases", {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({price: amount, user: userId, store: storeId}) 
    })
        .then(res => res.json())
        .then(response => {
            console.log(response);
        });
};