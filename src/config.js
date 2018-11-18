export const env = 'local'

export const firebase = {
  apiKey: 'AIzaSyDtSlKi28NHeqV_uNjusdcZf707vCe0ThI',
  authDomain: 'fitness-40e7a.firebaseapp.com',
  databaseURL: 'https://fitness-40e7a.firebaseio.com',
  projectId: 'fitness-40e7a',
  storageBucket: 'fitness-40e7a.appspot.com',
  messagingSenderId: '1085825079554',
}

export const reduxFirebase = {
  userProfile: 'users',
  enableLogging: false,
  updateProfileOnLogin: true,
  useFirestoreForProfile: true,
}

export default {
  env,
  firebase,
  reduxFirebase
}
