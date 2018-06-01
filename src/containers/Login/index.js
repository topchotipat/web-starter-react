import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../../actions/authentication'
import inputText from '../../common/inputText'
import { isEmail } from '../../services/utilities/validation'
import styles from './login.scss'

class Login extends Component{
    onSubmit = (Props) =>{
        this.props.login(Props,()=>{
            this.props.history.push('/dashboard')
        })
    }
    render(){
        const {handleSubmit} = this.props
        return(
            <div id="login-form" className={styles.container}>
                 <div className={styles.login}>
                    <form onSubmit={handleSubmit(this.onSubmit)} >
                    <fieldset>
                        <label>Email</label>
                        <Field
                            name='email'
                            type='text'
                            component={inputText}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <Field
                            name='password'
                            type='password'
                            component={inputText}
                        />
                    </fieldset>
                    <ul className={styles.error_messages}>
                        {this.props.errorMessage}
                    </ul>
                        <div className={styles.form_submit}>
                            <button>Log in</button>
                        </div>
                    </form>
                </div>   
            </div>   
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errorMessage: state.auth.errorMessage
    }
}

const validate = (values) => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Email is Required'
    } else if (!isEmail(values.email)){
        errors.email = 'Invalid email address'
    }

    if(!values.password) {
        errors.password = 'Password is Required'
    }

    return errors
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'login',
        validate
    })
)(Login);