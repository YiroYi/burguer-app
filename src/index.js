import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';//hay que agregar arriba applyMiddleware, compose

import { Provider } from 'react-redux';
import burguerBuilderReducer from './store/reducers/burguerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

const composeEnhacer = compose;

const rootReducer = combineReducers({
  burguerBuilder: burguerBuilderReducer,
  orders: orderReducer,
  auth: authReducer
});


const store = createStore(rootReducer, composeEnhacer(
  applyMiddleware(thunk)
));


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
