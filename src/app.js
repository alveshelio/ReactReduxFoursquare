import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import store from './stores';
import { Nav, Venues } from './components';

const app = (
  <Provider store={store.initialize}>
    <div>
      <Nav />
      <Venues />
    </div>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'))