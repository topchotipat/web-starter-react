import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signOut}from '../../actions'

class Dashboard extends Component {
  doLogout() {
    this.props.signOut(()=>{
      this.props.history.push('/login')
    })
  }
  render() {
    return (
      <div >
        <div >
          Dashboard
          <button onClick={this.doLogout.bind(this)}>
            Log out
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, {signOut})(Dashboard)
