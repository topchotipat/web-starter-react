import React from 'react'
import styles from '../dashboard.scss'

const LeftBox = ({ props }) => (
    <div className={styles.leftBox}>
        <ul>
            <li>
                <a href='#'>
                    <i className="material-icons">person</i>
                    <span>Edit Profile</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="material-icons">person</i>
                    <span>Preferences</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="material-icons">person</i>
                    <span>Password</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="material-icons">person</i>
                    <span>Notifications</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="material-icons">person</i>
                    <span>Connected Accounts</span>
                </a>
            </li>
            <hr align="center" width="90%" color="#EBECEE" />
        </ul>
        <ul>
            <li>
                <a href='#'>
                    <i className="material-icons">person</i>
                    <span>Orders</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="material-icons">person</i>
                    <span>Payment</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="material-icons">person</i>
                    <span>Shipping</span>
                </a>
            </li>
            <hr align="center" width="90%" color="#EBECEE" />
        </ul>
        <ul>
            <li>
                <a href='#'>
                    <i className="material-icons">person</i>
                    <span>Creadits & Referrais</span>
                </a>
            </li>
        </ul>

    </div>
)

export default LeftBox
