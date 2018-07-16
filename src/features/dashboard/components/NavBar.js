import React from 'react'
import styles from '../dashboard.scss'

const onLogout = (props) => {
    props.signOut(() => {
        props.history.push('/login')
    })
}
const NavBar = ({ props }) => (
    <div className={styles.navBar}>
        <ul>
            <input placeholder={'Search Fancy'} />
        </ul>
        <ul>
            <span>
                FANCY
            </span>
        </ul>
        <ul>
            <a href='#'>
                Log out
                <i onClick={() => onLogout(props)} className="material-icons">exit_to_app</i>
            </a>
        </ul>
    </div>
)

export default NavBar
