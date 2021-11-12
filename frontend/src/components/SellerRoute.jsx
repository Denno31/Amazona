import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminRoute = ({ component: Component, ...rest }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          userInfo && userInfo.isAdmin ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
    </div>
  );
};
export default AdminRoute;
