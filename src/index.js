import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';
import { BrowserRouter } from 'react-router-dom'

const store = createStore (allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <WebPage />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
