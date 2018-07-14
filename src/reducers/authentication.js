import { AUTH_USER } from '../constants/actionType'

const INITIAL_STATE = {
    authenticated: '',
    errorMessege: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_USER.SUCCESS:
            return {
                ...state,
                authenticated: action.data
            }
        case AUTH_USER.FAILURE:
            return {
                ...state,
                errorMessage: action.data
            }
        default:
            return state
    }
}