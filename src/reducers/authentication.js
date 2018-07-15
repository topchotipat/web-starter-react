import { AUTH_USER } from '../constants/actionType'

const INITIAL_STATE = {
    user: {},
    isLoading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_USER.REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case AUTH_USER.SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.data,
            }
        case AUTH_USER.FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}