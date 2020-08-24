import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Router from './Routes/MainRoute';
import { Provider } from 'react-redux';
import store from './Config/Store/Index';

ReactDOM.render(

  <React.StrictMode>
      <Provider store={store}>
    <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);