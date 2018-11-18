// eslint-disable-next-line react/require-extension
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDtSlKi28NHeqV_uNjusdcZf707vCe0ThI',
  authDomain: 'fitness-40e7a.firebaseapp.com',
  databaseURL: 'https://fitness-40e7a.firebaseio.com',
  projectId: 'fitness-40e7a',
  storageBucket: 'fitness-40e7a.appspot.com',
  messagingSenderId: '1085825079554',
}

firebase.initializeApp(config)
firebase.firestore()
firebase.firestore().settings({ timestampsInSnapshots: true })
// firebase.functions()

export const firebaseConf = firebase
export const database = firebase.database().ref('posts/')
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const twitterProvider = new firebase.auth.TwitterAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
