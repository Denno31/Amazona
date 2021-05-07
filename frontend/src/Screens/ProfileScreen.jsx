import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { detailsUser } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

const ProfileScreen = () => {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(detailsUser(userInfo._id))
  }, [dispatch, userInfo._id])
  const submitHandler = () => {}
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
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={user.name}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={user.email}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm"
                placeholder="Enter confirm password"
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
