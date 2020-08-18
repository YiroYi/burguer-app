import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
  console.log("HI");
  return {
    type: actionTypes.AUTH_START
  };
};


export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};


export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  }
}



export const auth = (email, password, isSignup) => {
  return dispatch =>
  {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9T-STKeiUTBxRwCXRPdBFT4HQQ2Iwpgw';
    if(!isSignup) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9T-STKeiUTBxRwCXRPdBFT4HQQ2Iwpgw'
    }
    axios.post(url, authData)
    .then(response=>{
      console.log("HI WORLD");
      console.log(response.data.idToken);
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    })
    .catch(err=>{
      dispatch(authFail(err.response.data.error));
    });
  };
}