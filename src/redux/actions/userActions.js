// eslint-disable-next-line react/wrap-multilines
import { auth, googleProvider, twitterProvider } from '../../services/Firebase'

export const GET_USER = 'get_user'
export const USER_STATUS = 'user_status'
export function getUser() {
  return dispatch => {
    dispatch({
      type: USER_STATUS,
      payload: true,
    })
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user,
      })
      dispatch({
        type: USER_STATUS,
        payload: false,
      })
    })
  }
}

export function login(email, password) {
  // eslint-disable-next-line
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  // eslint-disable-next-line
  return dispatch => auth.doSignOut();
}

export function createAccount(email, password) {
  // eslint-disable-next-line
  return dispatch => auth.createUserWithEmailAndPassword(email, password);
}

export function googleLogin() {
  // eslint-disable-next-line
  return dispatch => auth.signInWithPopup(googleProvider);
}

export function twitterLogin() {
  // eslint-disable-next-line
  return dispatch => auth.signInWithPopup(twitterProvider);
}
