import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/authentication'

class Dashboard extends Component {
  doLogout() {
    this.props.signout(()=>{
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

export default connect(null, actions)(Dashboard)
