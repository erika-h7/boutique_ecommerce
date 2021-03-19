import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// Redux
import store from './redux/store'; //with this we now have access to redux from our store

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
