import { LOGIN_USER, SIGNUP_USER } from '../constants/actionType'

const INITIAL_STATE = {
    user: {},
    isLogInLoading: false,
    isSignUpLoading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER.REQUEST:
            return {
                ...state,
                isLogInLoading: true
            }
        case LOGIN_USER.SUCCESS:
            return {
                ...state,
                isLogInLoading: false,
                user: action.data,
            }
        case LOGIN_USER.FAILURE:
            return {
                ...state,
                isLogInLoading: false
            }
        case SIGNUP_USER.REQUEST:
            return {
                ...state,
                isSignUpLoading: true
            }
        case SIGNUP_USER.SUCCESS:
            return {
                ...state,
                isSignUpLoading: false,
            }
        case SIGNUP_USER.FAILURE:
            return {
                ...state,
                isSignUpLoading: false
            }
        default:
            return state
    }
}