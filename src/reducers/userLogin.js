import {
    USER_SIGN_UP,
    USER_SIGN_UP_ERROR
} from '../actions/userLogin'

const initialState = {
    authUser: null,
    error: null,
}

const userLogin = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGN_UP:
            userSignUp(state, action);
        case USER_SIGN_UP_ERROR: 
            userSignUpError(state, action);
        default:
            return state;
    }
}

function userSignUp(state, action) {
    console.log('action', action);
    return { ...state, authUser: action.payload}
}

function userSignUpError(state, action) {
    return { ...state, error: action.payload }
}


export default userLogin;

