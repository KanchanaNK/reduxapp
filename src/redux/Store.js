import {createStore} from 'redux'
// import cakeReducer from './cake/CakeReducer'
import rootReducer from './RootReducer'

const store = createStore(rootReducer)

export default store