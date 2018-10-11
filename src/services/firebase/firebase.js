import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDtSlKi28NHeqV_uNjusdcZf707vCe0ThI',
  authDomain: 'fitness-40e7a.firebaseapp.com',
  databaseURL: 'https://fitness-40e7a.firebaseio.com',
  projectId: 'fitness-40e7a',
  storageBucket: 'fitness-40e7a.appspot.com',
  messagingSenderId: '1085825079554',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
