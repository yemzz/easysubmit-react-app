import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../actions/types'

const access_token = JSON.parse(localStorage.getItem('access_token'))
const role = JSON.parse(localStorage.getItem('role'))
const first_name = JSON.parse(localStorage.getItem('first_name'))
const last_name = JSON.parse(localStorage.getItem('last_name'))
const email = JSON.parse(localStorage.getItem('email'))

const initialState = access_token
  ? { isLoggedIn: true, access_token, role, first_name, last_name, email }
  : { isLoggedIn: false, access_token: null }

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        ...payload,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        access_token: null,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        access_token: null,
      }
    default:
      return state
  }
}
