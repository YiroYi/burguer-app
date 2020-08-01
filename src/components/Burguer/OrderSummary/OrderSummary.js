import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
      <p>Total Price: {props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
    );
};

export default OrderSummary;
