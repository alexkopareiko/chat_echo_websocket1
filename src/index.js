import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import socketMiddleware from './socketMiddleware';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, socketMiddleware);

const store = createStore (allReducers,
                    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

                  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
