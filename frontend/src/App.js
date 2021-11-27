import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import CartScreen from "./Screens/CartScreen";
import HomeScreen from "./Screens/HomeScreen";
import OrderHistoryScreen from "./Screens/OrderHistoryScreen";
import OrderScreen from "./Screens/OrderScreen";
import PaymentMethodScreen from "./Screens/PaymentMethodScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import ProductScreen from "./Screens/ProductScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import SigninScreen from "./Screens/SigninScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import SellerRoute from "./components/AdminRoute";
import SellerScreen from "./Screens/SellerScreen";
import SearchBox from "./components/SearchBox";
import SearchScreen from "./Screens/SearchScreen";
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { userInfo } = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  useEffect(() => {
    document.title = "Jamia";
  }, []);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="rows">
          <div>
            <Link to="/" className="brand">
              Jamia
            </Link>
          </div>
          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Order</Link>
                  </li>
                  <li>
                    <Link to="/userlist">users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeScreen} />

          <Route exact path="/cart/:id?" component={CartScreen} />
          <PrivateRoute
            exact
            path="/orderhistory"
            component={OrderHistoryScreen}
          />
          <Route exact path="/signin" component={SigninScreen} />
          <Route exact path="/seller/:id" component={SellerScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/shipping" component={ShippingAddressScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/payment" component={PaymentMethodScreen} />
          <Route exact path="/placeorder" component={PlaceOrderScreen} />
          <Route exact path="/order/:id" component={OrderScreen} />
          <PrivateRoute exact path="/profile" component={ProfileScreen} />
          <AdminRoute exact path="/productlist" component={ProductListScreen} />
          <AdminRoute exact path="/orderlist" component={OrderListScreen} />
          <AdminRoute exact path="/userlist" component={UserListScreen} />
          <Route path="/search/name/:name?" exact component={SearchScreen} />
          <SellerRoute
            exact
            path="/productlist/seller"
            component={ProductListScreen}
          />
          <SellerRoute
            exact
            path="/orderlist/seller"
            component={OrderListScreen}
          />
          <AdminRoute exact path="/user/:id/edit" component={UserEditScreen} />

          <AdminRoute
            exact
            path="/product/:id/edit"
            component={ProductEditScreen}
          />
        </main>
        <footer className="rows center">All rights Reserverd</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
