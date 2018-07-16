import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form'
import auth from './authentication'
import preferences from './editPreferences'
export default combineReducers({
    form: fromReducer,
    auth,
    preferences
})