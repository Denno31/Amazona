import Axios from 'axios'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGN_FAIL,
  USER_SIGN_OUT,
  USER_SIGN_REQUEST,
  USER_SIGN_SUCCESS,
  USER_SIGN_OUT_REGISTER,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
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
  dispatch({ type: USER_SIGN_OUT_REGISTER })
  localStorage.removeItem('cartItems')
  localStorage.removeItem('shippingAddress')
}
export const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: userId })
  const {
    userSignin: { userInfo },
  } = getState()

  try {
    const { data } = await Axios.get(`/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    console.log(message)
    dispatch({ type: USER_REGISTER_FAIL, payload: message })
  }
}
