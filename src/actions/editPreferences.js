import axios from 'axios'
import { EDIT_PREFERENCES } from '../constants/actionType'
import { handleError } from '../utils'

export const fetchPreferences = (callback) => async dispatch => {
    dispatch({ type: EDIT_PREFERENCES.REQUEST })
    try {
        const respone = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/preference'
        })
        dispatch({ type: EDIT_PREFERENCES.SUCCESS, preferences: respone.data.data })
        callback()
    } catch (error) {
        dispatch({ type: EDIT_PREFERENCES.FAILURE })
        callback(handleError(error))
    }
}

export const fetchUpsertPreferences = (props, callback) => async dispatch => {
    const {
        categoryLists,
        currency,
        language,
        messages,
        profileVisibility,
        timeZone
    } = props

    const preferences = {
        localization: {
            language,
            timeZone,
            currency
        },
        privacy: {
            profileVisibility,
            messages
        },
        content: {
            categoryLists
        }
    }

    dispatch({ type: EDIT_PREFERENCES.REQUEST })
    try {
        await axios({
            method: 'post',
            url: 'http://localhost:4000/api/preference',
            data: preferences
        })
        dispatch({ type: EDIT_PREFERENCES.SUCCESS, preferences })
        callback()
    } catch (error) {
        dispatch({ type: EDIT_PREFERENCES.FAILURE })
        callback(handleError(error))
    }
}
