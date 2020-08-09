import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurguerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGUER_SUCCESS,
    orderId: id,
    orderData: orderData
  }
}

export const purchaseBurguerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGUER_FAILED,
    error: error
  }
}

export const purchaseBurguerStart = (orderData) => {
  return dispatch => {
    axios.post('/orders.json', orderData)
        .then(response => {
          dispatch(purchaseBurguerSuccess(response.data, orderData));
        })
        .catch(error => {
          dispatch(purchaseBurguerFail(error))
        });
  }
}
