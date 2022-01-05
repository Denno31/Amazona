import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

function RegisterScreen(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/'
  const { userInfo, loading, error } = useSelector(
    (state) => state.userRegister,
  )
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    //sign in action
    if (password !== confirmPassword) return alert('passwords do not match')
    dispatch(register(name, email, password))
  }
  useEffect(() => {
    console.log(userInfo)
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [userInfo, redirect, props.history])
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>Create Account</h2>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>Already have an account? </div>
          <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterScreen
