import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Burguer Builder</NavigationItem>
    <NavigationItem link="/" >Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;