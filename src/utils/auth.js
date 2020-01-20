import axios from 'axios'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const getUserSession = () => {
  const url = `${BACKEND_URL}/auth/session`
  return axios.get(url)
}

export const login = ({ email, password }) => {
  const url = `${BACKEND_URL}/auth/login`
  return axios.post(url, { email, password })
}

export const register = ({ email, password, ...rest }) => {
  const url = `${BACKEND_URL}/auth/register`
  return axios.post(url, { email, password, ...rest })
}
