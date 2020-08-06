import * as actionTypes from './actions';

const initialState = {
  ingredients:  {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return{
        ...state, //First copy the old state
        ingredients: {
          ...state.ingredients, //Copy the properties of the old state
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };

    case actionTypes.REMOVE_INGREDIENT:
      return{
        ...state, //First copy the old state
        ingredients: {
          ...state.ingredients, //Copy the properties of the old state
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
  }

};

export default reducer;
