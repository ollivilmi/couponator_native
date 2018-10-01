import { FETCH_USER_DATA, LOGIN_AS_USER, GET_ALL_USERS } from "./types";

export const fetchUserData = user => dispatch => {
    fetch(`https://couponator-api.herokuapp.com/users/${user}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
            type: FETCH_USER_DATA,
            payload: data
            })
        }
    );
};

export const fetchAllUsers = () => dispatch => {
    fetch(`https://couponator-api.herokuapp.com/users`)
        .then(res => res.json())
        .then(data => {
            dispatch({
            type: GET_ALL_USERS,
            payload: data
            })
        }
    );
};

export const loginAsUser = userId => dispatch => {
    dispatch({
        type: LOGIN_AS_USER,
        payload: userId
    });
};