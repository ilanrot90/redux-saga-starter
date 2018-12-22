import { GET_USERS_SUCCESS, ADD_USER_SUCCESS, DELETE_USER_SUCCESS, USER_ERROR } from '../actionTypes';

const init = {
    items: [],
    error: ''
};

const userReducer = (state = init, action) => {
    switch(action.type) {
        case GET_USERS_SUCCESS: 
            return { ...state, items: action.payload };

        case DELETE_USER_SUCCESS:
            return { ...state, items: [...action.payload] };

        case ADD_USER_SUCCESS: 
            return { ...state, items: [...state.items, action.payload] };

        case USER_ERROR:
            console.log(action.payload);

            return {...state, error: action.payload}

        default:
            return state;
    }
}

export default userReducer;