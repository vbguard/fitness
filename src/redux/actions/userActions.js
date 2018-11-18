// eslint-disable-next-line react/wrap-multilines
// import { auth, firestore, googleProvider, twitterProvider, facebookProvider } from '../../services/Firebase'

// export const GET_USER = 'get_user'
// export const USER_STATUS = 'user_status'
// export function getUser() {
//   return dispatch => {
//     dispatch({
//       type: USER_STATUS,
//       payload: false,
//     })
//     auth.onAuthStateChanged(user => {
//       dispatch({
//         type: GET_USER,
//         payload: user,
//       })
//       dispatch({
//         type: USER_STATUS,
//         payload: true,
//       })
//     })
//   }
// }
export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })

  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err})
    })
  }
}

export function login(email, password) {
  // eslint-disable-next-line
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  // eslint-disable-next-line
  return dispatch => auth.signOut();
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

export function facebookLogin() {
  // eslint-disable-next-line
  return dispatch => auth.signInWithPopup(facebookProvider);
}
