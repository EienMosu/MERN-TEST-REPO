// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// Pages
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/products/:category">
          <ProductList /> 
        </Route>
        <Route path="/product/:id">
          <SingleProduct /> 
        </Route>
        <Route path="/cart">
          <Cart /> 
        </Route>
        <Route path="/login">
          <Login /> 
        </Route>
        <Route path="/register">
          <Register /> 
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
