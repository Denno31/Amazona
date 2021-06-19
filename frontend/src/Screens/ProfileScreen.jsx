import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { detailsUser, updateUserProfile } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setSetEmail] = useState('')
  const [password, setSetPassword] = useState('')
  const [confirmPassword, setSetConfirmPassword] = useState('')

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const userDetails = useSelector((state) => state.userDetails)
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile
  const { loading, error, user } = userDetails

  const dispatch = useDispatch()
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET })
      dispatch(detailsUser(userInfo._id))
    } else {
      setName(user.name)
      setSetEmail(user.email)
    }
  }, [dispatch, userInfo._id, user])
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('passwords do not match')
    } else {
      dispatch(updateUserProfile({ userId: user._id, name, email, password }))
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Profile Updated Successfully
              </MessageBox>
            )}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setSetEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setSetPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm"
                placeholder="Enter confirm password"
                onChange={(e) => setSetConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor=""></label>
              <button className="primary" type="submit">
                update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}

export default ProfileScreen
