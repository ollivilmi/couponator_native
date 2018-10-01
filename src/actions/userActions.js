import { CURRENT_USER } from "./types";

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