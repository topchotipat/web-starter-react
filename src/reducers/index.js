import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form'
import auth from './authentication'
export default combineReducers({
    form: fromReducer,
    auth
})