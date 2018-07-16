import {
    fetchLoginUser,
    signOut,
    setUserToken,
    fetchSignUpUser
} from './authentication'
import {
    fetchPreferences,
    fetchUpsertPreferences
} from './editPreferences'

export {
    // Authentication
    fetchLoginUser,
    fetchSignUpUser,
    signOut,
    setUserToken,

    // Edit Preferences
    fetchPreferences,
    fetchUpsertPreferences
}