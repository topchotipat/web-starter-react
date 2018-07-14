import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from '../features/authentication'
import Dashboard from '../features/Dashboard'
import App from '../app'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'

const routes = (props) => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Dashboard} isLoggedin={props.auth} />
            </Switch>
        </App>
    </BrowserRouter>
)

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(routes)
