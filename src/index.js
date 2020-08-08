import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';//hay que agregar arriba applyMiddleware, compose

import { Provider } from 'react-redux';
import burguerBuilderReducer from './store/reducers/burguerBuilder';

const composeEnhacer = compose;

const store = createStore(burguerBuilderReducer, composeEnhacer(
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
