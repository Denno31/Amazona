import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const UserListScreen = (props) => {
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector((state) => state.userList);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.userDelete);
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch, successDelete]);
  const deleteHandler = (user) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(user._id));
    }
  };
  return (
    <div>
      <h1>Users</h1>
      {loadingDelete && <LoadingBox />}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">User Deleted successfully</MessageBox>
      )}
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>IS SELLER</td>
              <td>IS ADMIN</td>
              <td>ACTIONS</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isSeller ? "YES" : "NO"}</td>
                <td>{user.isAdmin ? "YES" : "NO"}</td>
                <td>
                  <button
                    className="small"
                    onClick={() => props.history.push(`/user/${user._id}/edit`)}
                  >
                    Edit
                  </button>
                  <button className="small" onClick={() => deleteHandler(user)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserListScreen;
