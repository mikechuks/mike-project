import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const user = true
  return (
    <Router>
    <Switch>
     <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/products/:category">
      <ProductList/>
      </Route>
      <Route path="/products/:id">
      <Product/>
     </Route>
     <Route path="/cart">
      <Cart/>
     </Route>
     <Route path="/login">
      {user ? <Redirect to="/" />  : <Login/>}
     </Route>
     <Route>
     {user ? <Redirect to="/" />  : <Register/>}
     </Route>
    </Switch>
  </Router>
  );
}

export default App;
