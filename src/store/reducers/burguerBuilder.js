import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
  ingredients:  null,
  totalPrice: 4,
  error: false
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
      const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1}
      const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
      return updateObject(state, updatedState);

    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false
      };

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };

    case actionTypes.REMOVE_INGREDIENT:
      return {
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
