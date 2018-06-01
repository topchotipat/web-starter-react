import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../components/features/Login'
import App from '../components/app'

export default ()=>{
    return(
        <BrowserRouter>
            <App>
                <Route exact path="/" component={Login} />
            </App> 
        </BrowserRouter>
    ) 
}
