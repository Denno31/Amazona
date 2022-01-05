import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          userInfo ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    </div>
  )
}
export default PrivateRoute
