import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { signout } from './actions/userActions'
import CartScreen from './Screens/CartScreen'

import HomeScreen from './Screens/HomeScreen'
import OrderScreen from './Screens/OrderScreen'
import PaymentMethodScreen from './Screens/PaymentMethodScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import ProductScreen from './Screens/ProductScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ShippingAddressScreen from './Screens/ShippingAddressScreen'
import SigninScreen from './Screens/SigninScreen'
function App() {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const { userInfo } = useSelector((state) => state.userSignin)
  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout())
  }
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
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/cart/:id?" component={CartScreen} />
          <Route exact path="/signin" component={SigninScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/shipping" component={ShippingAddressScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/payment" component={PaymentMethodScreen} />
          <Route exact path="/payment" component={PaymentMethodScreen} />
          <Route exact path="/order/:id" component={OrderScreen} />
        </main>
        <footer className="rows center">All rights Reserverd</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
