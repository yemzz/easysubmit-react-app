import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_MESSAGE,
} from './types'

import AuthService from '../services/auth'

export const register = (firstName, lastName, email, password, role) => (
  dispatch
) => {
  return AuthService.register(firstName, lastName, email, password, role).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      })

      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      dispatch({
        type: REGISTER_FAIL,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })

      return Promise.reject()
    }
  )
}

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { ...data },
      })

      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      dispatch({
        type: LOGIN_FAIL,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })

      return Promise.reject()
    }
  )
}

export const logout = () => (dispatch) => {
  AuthService.logout()

  dispatch({
    type: LOGOUT,
  })
}
