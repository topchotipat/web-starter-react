import React, { Component } from 'react'
import store from './store'
import setHeaderToken from './config/setHeaderToken'
import { setUserToken, signOut } from './actions'
import jwt_decode from 'jwt-decode'

class App extends Component {
  componentWillMount() {
    if (localStorage.token) {
      setHeaderToken(localStorage.token)


      const decoded = jwt_decode(localStorage.token)
      store.dispatch(setUserToken(decoded))

      const currentTime = Date.now() / 1000

      if (decoded.exp < currentTime) {
        store.dispatch(signOut(() => {
          window.location.href = '/login'
        }))
      }
    }
  }
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default App
