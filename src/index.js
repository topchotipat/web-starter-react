import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './services/store/configStore';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './containers/Login'
import App from './app'

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
            <App>
                <Route exact path="/" component={Login} />
            </App> 
      </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
