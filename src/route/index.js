import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login, Signup } from '../features/authentication'
import Dashboard from '../features/Dashboard'
import App from '../app'
import PrivateRoute from './PrivateRoute'

const routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute exact path="/" component={Dashboard} />
            </Switch>
        </App>
    </BrowserRouter>
)

export default routes
