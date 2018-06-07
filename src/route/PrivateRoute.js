import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLoggedin, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      isLoggedin.authenticated
      ? (
         <Component {...props} />
      )
      : (<Redirect to={{ pathname: '/login', state: { from: props.path } }} />)
    )}
  />
  );
export default PrivateRoute


