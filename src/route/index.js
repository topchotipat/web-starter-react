import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../containers/Login'
import Dashboard from '../containers/Dashboard'
import App from '../app'
import PrivateRoute from './PrivateRoute'


const routes = () =>(
    <BrowserRouter>
        <App>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Dashboard} />
            </Switch>
        </App> 
    </BrowserRouter>
)

export default routes