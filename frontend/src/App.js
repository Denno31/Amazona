
import {BrowserRouter, Route} from 'react-router-dom'
import CartScreen from './Screens/CartScreen';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
  <header className="rows">
    <div>
      <a href="/" className="brand">Jamia</a>
    </div>
    <div>
      <a href="/cart">Cart</a>
      <a href="/signin">Sign in</a>
    </div>
  </header>
  <main>
  <Route exact path="/" component={HomeScreen}/>
  <Route exact path="/cart/:id?" component={CartScreen}/>
  <Route exact path="/product/:id" component={ProductScreen}/>
    
  </main>
  <footer className="rows center">
    All rights Reserverd
  </footer>
</div>
</BrowserRouter>
  );
}

export default App;
