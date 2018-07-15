import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login, Signup } from '../features/authentication'
import { MainDashboard } from '../features/dashboard'
import App from '../app'
import PrivateRoute from './PrivateRoute'

const routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute exact path="/" component={MainDashboard} />
            </Switch>
        </App>
    </BrowserRouter>
)

export default routes
