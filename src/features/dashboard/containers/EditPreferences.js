import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import styles from '../dashboard.scss'
import { language, timeZone, currency } from '../../../constants/mockData'

class EditPreferences extends Component {
    constructor(props) {
        super(props)
        this.props.change('language', 'English')
        this.props.change('timeZone', '0.0')
        this.props.change('currency', 'dollars')
    }
    componentDidMount() {
        console.log('1')
    }
    onSubmit = (Props) => {
        console.log('Props', Props)
    }
    render() {
        const { handleSubmit, reduxFormValues } = this.props
        const error = reduxFormValues && reduxFormValues.syncErrors
        return (
            <div className={styles.editPreference} >
                <form onSubmit={handleSubmit(this.onSubmit)} >
                    <ul>
                        <h2>Edit Preferences</h2>
                        <hr align="center" width="100%" color="#EBECEE" />
                    </ul>
                    <ul>

                        <label>Localization</label>
                        <div className={styles.tabEdit}>
                            <ul>
                                <li>
                                    <span>Language</span>
                                    <Field name='language' component='select'>
                                        {language.map(data => (
                                            <option key={data} value={data} >{data}</option>
                                        ))}
                                    </Field>
                                    <p> Interested in helping translate Fancy?
                                <a href='#'> Let us known. </a>
                                    </p>
                                </li>
                                <li>
                                    <span>Time zone</span>
                                    <Field name='timeZone' component='select'>
                                        {timeZone.map(data => (
                                            <option key={data.name} value={data.time} >{data.name}</option>
                                        ))}
                                    </Field>
                                </li>
                                <li>
                                    <span>Currency</span>
                                    <Field name='currency' component='select'>
                                        {currency.map(data => (
                                            <option key={data.name} value={data.currency} >{data.name}</option>
                                        ))}
                                    </Field>
                                </li>
                            </ul>
                        </div>
                        <hr align='center' width='100%' color='#EBECEE' />
                    </ul>
                    <ul>
                        <label>Privacy</label>
                        <div className={styles.tabEdit}>

                            <ul>
                                <li>
                                    <span>Profile visibility</span>
                                    <p style={{ marginTop: -5 }}>Mange who can see your activity, things you fancy, your followers,
                                    people you follow or in anyone's search results</p>
                                    <div className={styles.textRadio}>
                                        <Field
                                            name="visible"
                                            component="input"
                                            type="radio"
                                            value="everyone"
                                        />
                                        {' '}Everyone
                                   <div style={{ paddingLeft: 20 }} />
                                        <Field
                                            name="visible"
                                            component="input"
                                            type="radio"
                                            value="private"
                                        />
                                        <i className="material-icons" style={{ fontSize: 16 }}>lock</i>
                                        {' '}Private
                                </div>
                                </li>
                                <li>
                                    <span>Messages</span>
                                    <p style={{ marginTop: -5 }}>Control who can send you messages</p>
                                    <div className={styles.textRadio}>
                                        <Field
                                            name="message"
                                            component="input"
                                            type="radio"
                                            value="everyone"
                                        />
                                        {' '}Everyone
                                   <div style={{ marginLeft: 20 }} />
                                        <Field
                                            name="message"
                                            component="input"
                                            type="radio"
                                            value="follow"
                                        />
                                        {' '}People you follow
                                   <div style={{ marginLeft: 20 }} />
                                        <Field
                                            name="message"
                                            component="input"
                                            type="radio"
                                            value="private"
                                        />
                                        <i className="material-icons" style={{ fontSize: 16 }}>lock</i>
                                        {' '}No one
                                </div>
                                </li>
                                <li>
                                    <span>Recently viewed</span>
                                    <p style={{ marginTop: -5 }}>Manage your Fancy browsing history</p>
                                    <a href='#'> Delete all items </a>
                                </li>
                            </ul>
                        </div>
                        <hr align="center" width="100%" color="#EBECEE" />
                    </ul>
                    <ul>
                        <label>Content</label>
                        <div className={styles.tabEdit}>
                            <ul>
                                <li>
                                    <span>Category lists</span>
                                    <p style={{ marginTop: -5 }}>Mange who can see your activity, things you fancy, your followers,
                                    people you follow or in anyone's search results</p>
                                    <div className={styles.textRadio}>
                                        <Field
                                            name="list"
                                            component="input"
                                            type="radio"
                                            value="enable"
                                        />
                                        {' '}Enable
                                   <div style={{ paddingLeft: 20 }} />
                                        <Field
                                            name="list"
                                            component="input"
                                            type="radio"
                                            value="disable"
                                        />
                                        <i className="material-icons" style={{ fontSize: 16 }}>lock</i>
                                        {' '}Disable
                                </div>
                                </li>
                            </ul>
                        </div>
                        <hr align="center" width="100%" color="#EBECEE" />
                    </ul>
                    <ul>
                        <div className={styles.submit}>
                            <button type='submit' disabled={!!error}> Save Preferences</button>
                        </div>
                    </ul>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    reduxFormValues: state.form.EditPreferences
})

const validate = (values) => {
    const errors = {}

    if (!values.list) {
        errors.list = 'Check list is Required'
    }
    if (!values.message) {
        errors.message = 'Message is Required'
    }
    if (!values.visible) {
        errors.visible = 'Visible is Required'
    }
    if (!values.currency) {
        errors.currency = 'Currency is Required'
    }
    if (!values.timeZone) {
        errors.timeZone = 'Time Zone is Required'
    }
    if (!values.language) {
        errors.language = 'Language is Required'
    }

    return errors
}


export default compose(
    connect(mapStateToProps, null),
    reduxForm({
        form: 'EditPreferences',
        validate
    })
)(EditPreferences)