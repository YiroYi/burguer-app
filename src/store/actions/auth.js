import * as actionTypes from './actionTypes';

export const authStart = () => {
  console.log("HI");
  return {
    type: actionTypes.AUTH_START
  };
};


export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};


export const authError = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password) => {
  return dispatch =>
  {
    dispatch(authStart());
  };
}
