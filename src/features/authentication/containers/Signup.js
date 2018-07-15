import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { fetchSignUpUser } from '../../../actions'
import { InputText } from '../../../common'
import { isEmail } from '../../../utils'
import styles from '../authen.scss'


class Signup extends Component {
    onSubmit = (Props) => {
        this.props.fetchSignUpUser(Props, error => {
            if (error) {
                alert(error)
            } else {
                this.props.history.push('/login')
            }
        })
    }
    render() {
        const { handleSubmit, isSignUpLoading } = this.props
        return (
            <div id="login-form" className={styles.container}>
                {
                    isSignUpLoading && <div className={styles.loader}>
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
                        <h1>SIGN UP</h1>
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
                            <button>SUBMIT</button>
                            <Link to="/login"> Log in</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isSignUpLoading: state.auth.isSignUpLoading
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
    connect(mapStateToProps, { fetchSignUpUser }),
    reduxForm({
        form: 'signup',
        validate
    })
)(Signup);