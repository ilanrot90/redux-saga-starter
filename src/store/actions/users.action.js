import {
    GET_USERS_SUCCESS,
    GET_USERS_REQUEST,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    USER_ERROR
} from '../actionTypes';

export const getUserRequest = () => ({ type: GET_USERS_REQUEST });

export const getUserSuccess = ({ users }) => ({ type: GET_USERS_SUCCESS, payload: users });

export const addUserRequest = (user) => ({ type: ADD_USER_REQUEST, payload: user });

export const addUserSuccess = (user) => ({ type: ADD_USER_SUCCESS, payload: user });

export const deleteUserRequest = (userId) => ({ type: DELETE_USER_REQUEST, payload: userId });

export const deleteUserSuccess = (items) => ({ type: DELETE_USER_SUCCESS, payload: items });

export const userError = ({ error }) => ({ type: USER_ERROR, payload: error });