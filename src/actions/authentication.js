import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { AUTH_USER } from '../constants/actionType'
import setHeaderToken from '../config/setHeaderToken'
import { handleError } from '../utils'


export const setUserToken = data => ({
    type: AUTH_USER.SUCCESS,
    data
})

export const fetchLoginUser = (props, callback) => async dispatch => {
    const { email, password } = props

    dispatch({ type: AUTH_USER.REQUEST })
    try {
        const respone = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/user/login',
            data: {
                email,
                password
            }
        })
        const { token } = respone.data.data
        const decoded = jwt_decode(token)

        localStorage.setItem('token', token)
        setHeaderToken(token)
        dispatch(setUserToken(decoded))

        callback()
    } catch (error) {
        console.log('error', error)
        dispatch({ type: AUTH_USER.FAILURE })
        callback(handleError(error))
    }
}

export const signOut = (callback) => dispatch => {
    localStorage.removeItem('token')
    dispatch(setUserToken(''))
    callback()
}

