import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../containers/Login'
import ErrorPage from '../containers/ErrorPage'
import Dashboard from '../containers/Dashboard'
import App from '../app'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'

const routes = (props) =>(
    <BrowserRouter>
        <App>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Dashboard} isLoggedin={props.auth}/>
                <Route path="*" component={ErrorPage} />
            </Switch>
        </App> 
    </BrowserRouter>
)

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(routes)
