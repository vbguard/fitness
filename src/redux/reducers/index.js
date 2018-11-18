import { combineReducers } from 'redux'
import UserReducer from './userReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
// import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  auth: UserReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer
