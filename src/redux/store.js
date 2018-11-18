import { createStore, applyMiddleware, compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebaseConf from '../services/Firebase'
import firebase from 'firebase'

import rootReducer from './reducers/index'


const enhancers = []
if (env === 'local') {
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
const middleware = [thunk.withExtraArgument({getFirebase, getFirestore}), logger]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    reactReduxFirebase(firebaseConf, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(firebase)),
  ...enhancers
)

export default store
