import { firebaseInit } from '../firebase';

export const USER_SIGN_UP = "USER_SIGN_UP";
export const USER_SIGN_UP_ERROR = "USER_SIGN_UP_ERROR";

export const userSignUp = (email, password) => {
    return async (dispatch) => {
        try {
           const userData = await firebaseInit.auth().createUserWithEmailAndPassword(email, password);

           // payload is the response: that we're going to store in the reducers
           dispatch({
               type: USER_SIGN_UP,
               payload: userData,
           })
        } catch(err) {
            console.log('err', err);
            dispatch({
                type: USER_SIGN_UP_ERROR,
                payload: err,
            })
        }
    }
}