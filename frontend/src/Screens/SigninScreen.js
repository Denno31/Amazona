import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

function SigninScreen(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/'
  const { userInfo, loading, error } = useSelector((state) => state.userSignin)
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    //sign in action
    dispatch(signin(email, password))
  }
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [userInfo, redirect, props.history])
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>Sign in</h2>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>New customer? </div>
          <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
        </div>
      </form>
    </div>
  )
}

export default SigninScreen
