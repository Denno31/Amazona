import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_RESET } from "../constants/userConstants";
export default function UserEditScreen(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isSeller, setIsSeller] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const userId = props.match.params.id;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.updateUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push("/userlist");
    }

    dispatch(detailsUser(userId));
  }, [dispatch, props.history, successUpdate, userId]);
  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setIsSeller(user?.isSeller);
    setIsAdmin(user?.isAdmin);
  }, [user]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isSeller, isAdmin }));
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit User {name}</h1>
          {loadingUpdate && <LoadingBox />}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="isSeller">Is Seller</label>
              <input
                type="checkbox"
                id="isSeller"
                checked={isSeller}
                onChange={(e) => setIsSeller(e.target.checked)}
              />
            </div>
            <div>
              <label htmlFor="isAdmin">Is Admin</label>
              <input
                type="checkbox"
                id="isAdmin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
            </div>
            <div>
              <button type="submit" className="primary">
                update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
