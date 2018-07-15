import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../actions'
import { NavBar } from '../../dashboard'
import styles from '../dashboard.scss'

class EditPreferences extends Component {
    doLogout() {
        this.props.signOut(() => {
            this.props.history.push('/login')
        })
    }
    render() {
        return (
            <div className={styles.container} >
                <NavBar props={this.props}/>
                <div >
                    <button onClick={this.doLogout.bind(this)}> Log out</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { signOut })(EditPreferences)
