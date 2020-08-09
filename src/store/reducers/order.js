import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  puchase: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      }

    case actionTypes.PURCHASE_BURGUER_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.PURCHASE_BURGUER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      }
      return {
        ...state,
        loading: false,
        purchased: true,
        order: state.orders.concat(newOrder)
    };

    case actionTypes.PURCHASE_BURGUER_FAILED:
      return {
        ...state,
        loading: false,

    };

    default:
      return state;
  }
};

export default reducer;
