import { EDIT_PREFERENCES } from '../constants/actionType'

const INITIAL_STATE = {
    dataPreferences: {},
    isLoading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_PREFERENCES.REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case EDIT_PREFERENCES.SUCCESS:
            return {
                ...state,
                isLoading: false,
                dataPreferences: action.preferences,
            }
        case EDIT_PREFERENCES.FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}