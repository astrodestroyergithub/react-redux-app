import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, devToolsEnhancer(applyMiddleware(logger, thunk)))

export default store