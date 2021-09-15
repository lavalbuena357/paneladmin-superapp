import axios from "axios"
export const AUTH = 'AUTH'
export const GET_USERS = 'GET_USERS'
export const GET_USER = 'GET_USER'
export const CREATE_USER = 'CREATE_USER'

export function auth() {
  return async function(dispatch) {
    try {
      const admins = await axios.get('http://localhost:3001/autenticacion')
      dispatch({
        type: AUTH,
        payload: admins.data
      })
    } catch (error) {console.log(error)}
  }
}

export function getUsers() {
  return async function(dispatch) {
    try {
      const users = await axios.get('http://localhost:3001/usuarios')
      dispatch({
        type: GET_USERS,
        payload: users.data
      })
    } catch (error) {console.log(error)}
  }
}

export function getUser(id) {
  return async function(dispatch) {
    try {
      const user = await axios.get(`http://localhost:3001/usuario/${id}`)
      dispatch({
        type: GET_USER,
        payload: user.data
      })
    } catch (error) {console.log(error)}
  }
}

export function createUser(payload) {
  return async function(dispatch) {
    try {
      await axios.post('http://localhost:3001/usuario', payload)
      dispatch({
        type: CREATE_USER,
        payload: payload
      })
    } catch (error) {console.log(error)}
  }
}