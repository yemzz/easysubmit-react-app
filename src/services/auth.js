import { LOGIN_SUCCESS } from '../actions/types'
import axios from 'axios'

const register = (firstName, lastName, email, password, role) => {
  return axios.post('https://radiant-inlet-12251.herokuapp.com/api/v1/signup', {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    role,
  })
}

const login = (email, password) => {
  return axios
    .post('https://radiant-inlet-12251.herokuapp.com/api/v1/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem(
          'first_name',
          JSON.stringify(response.data.first_name)
        )
        localStorage.setItem('email', JSON.stringify(response.data.email))
        localStorage.setItem(
          'last_name',
          JSON.stringify(response.data.last_name)
        )
        localStorage.setItem(
          'access_token',
          JSON.stringify(response.data.access_token)
        )
        localStorage.setItem(
          'refresh_token',
          JSON.stringify(response.data.refresh_token)
        )
        localStorage.setItem('role', JSON.stringify(response.data.role))
      }
      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('role')
  localStorage.removeItem('first_name')
  localStorage.removeItem('email')
  localStorage.removeItem('last_name')
}

export default {
  register,
  login,
  logout,
}
