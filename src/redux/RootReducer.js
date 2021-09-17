import {combineReducers} from 'redux'
import cakeReducer from './cake/CakeReducer'
import iceReducer from './ice/IceReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})

export default rootReducer