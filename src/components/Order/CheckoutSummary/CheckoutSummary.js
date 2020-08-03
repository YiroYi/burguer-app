import React from 'react';
import Burger from '../../Burguer/Burguer';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
  return (
    <div classes={classes.CheckoutSummary}>
      <div style={{width: '100%', height: '300px', margin: 'auto'}}>
        <h1>You will like it</h1>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger"
              clicked={props.checkoutCancelled}>Cancel</Button>
      <Button btnType="Success"
              clicked={props.checkoutContinued}>Continue</Button>
    </div>
  );
};

export default CheckoutSummary;
