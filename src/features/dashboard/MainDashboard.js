import React, { Component } from 'react'
import { NavBar, LeftBox, EditPreferences } from '../dashboard'
import styles from './dashboard.scss'
import { connect } from 'react-redux'
import { signOut } from '../../actions'

class MainDashboard extends Component {
    render() {
        return (
            <div className={styles.container} >
                <NavBar props={this.props} />

                <div className={styles.mainBox} >
                    <ul>
                        <LeftBox />
                    </ul>
                    <ul>
                        <EditPreferences />
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(null, { signOut })(MainDashboard)
