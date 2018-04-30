import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';

const store = createStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
  , document.querySelector('.container'));
