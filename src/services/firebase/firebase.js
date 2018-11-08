import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDtSlKi28NHeqV_uNjusdcZf707vCe0ThI',
  authDomain: 'fitness-40e7a.firebaseapp.com',
  databaseURL: 'https://fitness-40e7a.firebaseio.com',
  projectId: 'fitness-40e7a',
  storageBucket: 'fitness-40e7a.appspot.com',
  messagingSenderId: '1085825079554',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
