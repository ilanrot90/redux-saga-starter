import { takeEvery, takeLatest, take, call, fork, put, select } from 'redux-saga/effects';
import * as types from '../actionTypes';
import * as actions from '../actions/users.action';
import * as apiCall from '../../services/api.service';
import { items } from './selectors';

function* getUsers() {
    try {
        const { data } = yield call(apiCall.getUsers);
        
        yield put( actions.getUserSuccess({
            users: data
        }))
    } catch (err) {
        yield put(actions.userError({error: 'error in get users saga'}))
    }
}


function* addUser(action) {
    try {
        const user = yield call( apiCall.createUser, action.payload );
        yield put( actions.addUserSuccess( user ))
    } catch (err) {        
        yield put(actions.userError({error: 'error in add users saga'}))
    }
}

function* deleteUser( userId ) {
    const users = yield select(items);
    const newItems = users.filter( user => user.id !== userId);

    yield put( actions.deleteUserSuccess(newItems) );
    try {
        yield call(apiCall.deleteUser, userId);
        yield call(getUsers);
    } catch (err) {
        yield put(actions.userError({error: 'error in delete users saga'}))
    }
}

function* watchUsersDeleteRequest() {
    while(true) {
        const { payload } = yield take( types.DELETE_USER_REQUEST, deleteUser );
        
        yield call(deleteUser, payload);
    }
}

function* watchUsersRequest() {
    yield takeEvery( types.GET_USERS_REQUEST, getUsers );
}

function* watchCreateUsersRequest() {
    yield takeLatest( types.ADD_USER_REQUEST, addUser );    
}

const usersSagas = [
    fork(watchUsersRequest),
    fork(watchCreateUsersRequest),
    fork(watchUsersDeleteRequest)
];

export default usersSagas;