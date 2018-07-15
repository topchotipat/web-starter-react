import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { fetchLoginUser } from '../../../actions'
import { InputText } from '../../../common'
import { isEmail } from '../../../services/utilities/validation'
import styles from '../login.scss'
import Loader from 'react-loader-spinner'

class Login extends Component {
    onSubmit = (Props) => {
        this.props.fetchLoginUser(Props, error => {
            if (error) {
                alert(error)
            } else {
                this.props.history.push('/')
            }
        })
    }
    render() {
        const { handleSubmit, isLoading } = this.props
        return (
            <div id="login-form" className={styles.container}>
                {
                    isLoading && <div className={styles.loader}>
                        <Loader
                            type="Ball-Triangle"
                            color="#00BFFF"
                            height="80"
                            width="80"
                        />
                    </div>

                }
                <div className={styles.box}>
                    <form onSubmit={handleSubmit(this.onSubmit)} >
                        <h1>Log in</h1>
                        <div className={styles.form_item}>
                            <Field
                                name='email'
                                placeholder='email'
                                type='text'
                                component={InputText}
                            />
                        </div>
                        <div className={styles.form_item}>
                            <Field
                                name='password'
                                placeholder='password'
                                type='password'
                                component={InputText}
                            />
                        </div>
                        <div className={styles.form_submit}>
                            <button>Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading
})

const validate = (values) => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Email is Required'
    } else if (!isEmail(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Password is Required'
    }

    return errors
}

export default compose(
    connect(mapStateToProps, { fetchLoginUser }),
    reduxForm({
        form: 'login',
        validate
    })
)(Login);