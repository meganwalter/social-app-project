import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import IndexPage from './components/'
import ProfilePage from './components/user_profile'

import reducers from './reducers';

import './styles/styles.css'

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/users/:id" component={ProfilePage} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
