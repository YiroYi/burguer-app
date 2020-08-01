import React from 'react';
import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
  .map((igKey) => {
    return (<li key={igKey}>
              <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>)
  });
  return(
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burguer with</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <button>Cancel</button>

      <button>Continue</button>
    </Aux>
    );
};

export default OrderSummary;
