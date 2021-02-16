import './App.css';
import Home from './components/home';
import Login from './components/login';
import ProductList from './components/productlist';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import EventHandling from './components/eventhandling';
import Clock from './components/clock';
import Register from './components/register';
import { useState } from 'react';
import { ProductProvider } from './Context/productcontext';
import { UserProvider } from './Context/usercontext';
import SignUp from './components/signup';
import AdminDashbaord from './components/Admin';
import Signin from './components/signin';

function App() {

  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <ProductProvider>
        <Router>
          <div>
            <Header></Header>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/browse">
              <ProductList />
            </Route>

            <Route path="/event">
              <EventHandling />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/clock">
              <Clock count={count} setCount={setCount}></Clock>
            </Route>
            <Route path="/admin">
              <AdminDashbaord />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>


          </div>
        </Router>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;