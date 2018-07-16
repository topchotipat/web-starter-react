import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import Loader from 'react-loader-spinner'
import styles from '../dashboard.scss'
import { fetchUpsertPreferences, fetchPreferences } from '../../../actions'
import { language, timeZone, currency } from '../../../constants/mockData'
import { isEmpty } from '../../../utils'

class EditPreferences extends Component {
    constructor(props) {
        super(props)
        this.props.change('language', 'English')
        this.props.change('timeZone', '0.0')
        this.props.change('currency', 'dollars')

        this.state = {
            fetch: false
        }
    }
    componentDidMount() {
        const { fetchPreferences } = this.props
        fetchPreferences(error => {
            if (error) {
                alert(error)
            } else {
                this.setState({ fetch: true })
            }
        })
    }
    componentDidUpdate(pre) {
        const { dataPreferences } = this.props
        const { fetch } = this.state

        if (!isEmpty(dataPreferences) && fetch) {
            this.props.change('language', dataPreferences.localization.language)
            this.props.change('timeZone', dataPreferences.localization.timeZone)
            this.props.change('currency', dataPreferences.localization.currency)
            this.props.change('profileVisibility', dataPreferences.privacy.profileVisibility)
            this.props.change('messages', dataPreferences.privacy.messages)
            this.props.change('categoryLists', dataPreferences.content.categoryLists)
            this.setState({ fetch: false })
        }
    }
    onSubmit = (Props) => {
        this.props.fetchUpsertPreferences(Props, error => {
            if (error) {
                alert(error)
            } else {
                alert('OK Update data success')
            }
        })
    }
    render() {
        const { handleSubmit, reduxFormValues, isLoading } = this.props
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
                                            name="profileVisibility"
                                            component="input"
                                            type="radio"
                                            value="everyone"
                                        />
                                        {' '}Everyone
                                   <div style={{ paddingLeft: 20 }} />
                                        <Field
                                            name="profileVisibility"
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
                                            name="messages"
                                            component="input"
                                            type="radio"
                                            value="everyone"
                                        />
                                        {' '}Everyone
                                   <div style={{ marginLeft: 20 }} />
                                        <Field
                                            name="messages"
                                            component="input"
                                            type="radio"
                                            value="follow"
                                        />
                                        {' '}People you follow
                                   <div style={{ marginLeft: 20 }} />
                                        <Field
                                            name="messages"
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
                                            name="categoryLists"
                                            component="input"
                                            type="radio"
                                            value="enable"
                                        />
                                        {' '}Enable
                                   <div style={{ paddingLeft: 20 }} />
                                        <Field
                                            name="categoryLists"
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
    reduxFormValues: state.form.EditPreferences,
    isLoading: state.preferences.isLoading,
    dataPreferences: state.preferences.dataPreferences
})

const validate = (values) => {
    const errors = {}

    if (!values.categoryLists) {
        errors.categoryLists = 'Check list is Required'
    }
    if (!values.messages) {
        errors.messages = 'Message is Required'
    }
    if (!values.profileVisibility) {
        errors.profileVisibility = 'Visible is Required'
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
    connect(mapStateToProps, { fetchUpsertPreferences, fetchPreferences }),
    reduxForm({
        form: 'EditPreferences',
        validate,
        enableReinitialize: true
    })
)(EditPreferences)