import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// import cakeReducer from './cake/CakeReducer'
import rootReducer from "./RootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
