import Axios from 'axios'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGN_FAIL,
  USER_SIGN_OUT,
  USER_SIGN_REQUEST,
  USER_SIGN_SUCCESS,
} from '../constants/userConstants'

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGN_REQUEST, payload: { email, password } })
  try {
    const { data } = await Axios.post('/api/users/signin', { email, password })
    dispatch({ type: USER_SIGN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_SIGN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } })
  try {
    const { data } = await Axios.post('/api/users/register', {
      name,
      email,
      password,
    })
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_SIGN_OUT })

  localStorage.removeItem('cartItems')
  localStorage.removeItem('shippingAddress')
}
