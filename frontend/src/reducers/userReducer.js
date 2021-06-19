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
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
} from '../constants/userConstants'

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_REQUEST:
      return { loading: true }
    case USER_SIGN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_SIGN_FAIL:
      return { loading: false, error: action.payload }

    case USER_SIGN_OUT:
      return {}
    default:
      return state
  }
}
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }

    case USER_SIGN_OUT_REGISTER:
      return {}
    default:
      return state
  }
}
export const userDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true }
    case USER_DETAILS_SUCCESS:
      console.log(action.payload)
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const updateUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true }
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    case USER_UPDATE_PROFILE_RESET:
      return {}
    default:
      return state
  }
}
