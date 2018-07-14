import { AUTH_USER } from '../constants/actionType'
import axios from 'axios'

export const fetchLoginUser = (props, callback) => async dispatch =>{
    const { email, password} = props
    try {
        const respone = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/user/login',
            data:{
                email,
                password
            }
        })
        dispatch({ type: AUTH_USER.SUCCESS, data: respone.data.data.token})
        localStorage.setItem('token', respone.data.data.token)
        callback()
    } catch (error){
        dispatch({ type: AUTH_USER.FAILURE, data: error.response.data.error})
    }
}

export const signout = (callback) => dispatch =>{
    localStorage.removeItem('token')
    dispatch({ type: AUTH_USER, payload: '' })
    callback()
}
