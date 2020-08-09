import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Checkout extends Component {
  // state = {
  //   ingredients: null,
  //   price: 0
  // } We are using redux
  // componentDidMount() {
  //   this.props.onInitPurchase();
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render(){
    let summary = <Redirect to="/" />

    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
      summary = (
                <div>
                {purchasedRedirect}
                <CheckoutSummary
                ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                 />
                 <Route
                   path={this.props.match.path + '/contact-data'}
                   component={ContactData}
                   />
                </div>
                   );
      return summary;
    }
    return(
      <div>
        {summary}
      </div>
    );
  }
}

const mapStateToProps = state => { //Con esto ya conectamos este archivo a redux
  //y tenemos acceso a cualquier state
  return {
    ings: state.burguerBuilder.ingredients,
    purchased: state.orders.purchased
  }
}

export default connect(mapStateToProps)(Checkout);
