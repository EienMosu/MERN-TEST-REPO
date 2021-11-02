import React from "react";
// Styled Components
import styled from "styled-components";
// Components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
// Pages
import HomePage from "./pages/HomePage";
import UserList from "./pages/UserList";
import UserPage from "./pages/UserPage";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux

const Container = styled.div`
  display: flex;
`;

const App = () => {
  const isAdmin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).currentUser
  ).isAdmin
  
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {isAdmin && (
          <>
            <Topbar />
            <Container>
              <Sidebar />
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/users">
                <UserList />
              </Route>
              <Route exact path="/user/:id">
                <UserPage />
              </Route>
              <Route exact path="/newUser">
                <NewUser />
              </Route>
              <Route exact path="/product/:id">
                <ProductPage />
              </Route>
              <Route exact path="/newProduct">
                <NewProduct />
              </Route>
              <Route exact path="/products">
                <ProductList />
              </Route>
            </Container>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
