import {combineReducers} from 'redux'
import cakeReducer from './cake/CakeReducer'
import iceReducer from './ice/IceReducer'
import userReducer from './User/UserReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer,
    user: userReducer
})

export default rootReducer