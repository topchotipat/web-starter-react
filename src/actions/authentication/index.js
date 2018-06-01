import { AUTH_USER } from '../../constants/actionType'
import axios from 'axios'

export const login = (props, callback) => async dispatch =>{
    const { email, password} = props
    try {
        const respone = await axios({
            method: 'post',
            url: 'http://localhost:4000/signin',
            data:{
                email,
                password
            }
        })
        dispatch({ type: AUTH_USER.SUCCESS, data: respone.data.token})
        localStorage.setItem('token', respone.data.token)
        callback()
    } catch (error){
        dispatch({ type: AUTH_USER.FAILURE, data: 'Email or password Invalid'})
    }
}
