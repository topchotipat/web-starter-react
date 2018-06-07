import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/authentication'

class ErrorPage extends Component {
  doLogout() {
    this.props.signout(()=>{
      this.props.history.push('/login')
    })
  }
  render() {
    return (
      <div >
        <div >
          Page Not Found
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(ErrorPage)
