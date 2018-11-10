import { GET_USER } from '../actions/userActions'

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isLogined: true
      }
    default:
      return state
  }
}
