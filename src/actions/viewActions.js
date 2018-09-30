import { TOGGLE_VIEW, TOGGLE_NAV } from './types';

export const toggleView = view => dispatch => {
    dispatch({
        type: TOGGLE_VIEW,
        payload: view
    })
};

export const toggleNav = () => dispatch => {
    dispatch({
        type: TOGGLE_NAV
    })
};