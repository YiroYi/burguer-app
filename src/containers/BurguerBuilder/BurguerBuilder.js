import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class BurguerBuilder extends Component {
  state = {
    purchasing: false
  }
  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState (updatedIngredients) {
    const ingredients = {
      ...updatedIngredients
    };

    const sum = Object.keys(ingredients)
    .map((igKey) => {
      return ingredients[igKey]
    })
    .reduce((sum, el)=>{
      return sum + el;
    }, 0);
    return sum > 0;
  }

  // addIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {...this.state.ingredients};
  //   updatedIngredients[type] = updatedCount;
  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
  //   this.updatePurchase(updatedIngredients);
  // }

  // removeIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = {...this.state.ingredients};
  //   updatedIngredients[type] = updatedCount;
  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
  //   this.updatePurchase(updatedIngredients);
  // }

  purchaseHandler = () => {
    if(this.props.isAuthenticated) {
      this.setState({purchasing: true});
    } else {
      this.props.history.push('/auth');
    }
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {

    // const queryParams = [];

    // for(let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    // }

    // queryParams.push('price=' + this.state.totalPrice);

    // const queryString = queryParams.join('&');
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + queryString
    // });
    this.props.onInitPurchase();
    this.props.history.push('/checkout');

  }


  render() {
    console.log("HELLO");
    console.log(this.props.ings);
    const disabledInfo = {
      ...this.props.ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;
    let burguer = this.props.error ? <p>Error</p> : <Spinner />

    if (this.props.ings) {
      burguer = (
          <Aux>
            <Burguer ingredients={this.props.ings} />
            <BuildControls
              ingredientAdded={this.props.onIngredientAdded}
              removeIngredient={this.props.onIngredientRemoved}
              disabled={disabledInfo}
              price={this.props.price}
              purchasable={this.updatePurchaseState(this.props.ings)}
              ordered={this.purchaseHandler}
              isAuth={this.props.isAuthenticated}
            />
          </Aux>
          );
      orderSummary =  <OrderSummary
              ingredients={this.props.ings}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
              price={this.props.price}
              />
    }

    return(
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
         {orderSummary}
        </Modal>
        {burguer}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burguerBuilder.ingredients, //burguerBuilder es el nombre que le dimos al combinar los reducer en el index
    price: state.burguerBuilder.totalPrice,
    error: state.burguerBuilder.error,
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps =  dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit())
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurguerBuilder, axios));
