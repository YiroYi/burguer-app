import React from 'react';
import classes from './Burguer.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const Burguer = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) =>{
      return <BurguerIngredient key={igKey + i} type={igKey} />
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  },[]);//esto fue para convertir el objeto en un elemento array completo y poder contar si esta vacio o no

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>
  }

  return(
    <div className={classes.Burguer}>
      <BurguerIngredient type="bread-top" />
      {transformedIngredients}
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burguer;
