import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './services/store/configStore';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import App from './app'

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
            <App>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </App> 
      </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
