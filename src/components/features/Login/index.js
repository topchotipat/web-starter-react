import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../../../actions/authentication'

class Login extends Component{
    onSubmit = (Props) =>{
        this.props.login(Props,()=>{
            this.props.history.push('/')
        })
    }
    render(){
        const {handleSubmit} = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit)} >
                <fieldset>
                    <label>Email</label>
                    <Field
                        name='email'
                        type='text'
                        component='input'
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name='password'
                        type='password'
                        component='input'
                    />
                </fieldset>
                <fieldset>
                    <label>Role</label>
                    <Field name="role" component="select">
                        <option value="Normal">Normal</option>
                        <option value="Admin">Admin</option>
                    </Field>
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign In!</button>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'login'})
)(Login);