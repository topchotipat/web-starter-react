import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const initialState = {}
const middlewares = [
    reduxThunk.withExtraArgument(axios)
]
const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
);

export default store
