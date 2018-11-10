import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {
  user: null,
}

const enhancer = composeWithDevTools({})
const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  enhancer(applyMiddleware(...middleware)),
)

export default store
