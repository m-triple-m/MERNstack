import './App.css';
import Home from './components/home';
import Login from './components/login';
import ProductList from './components/productlist';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import EventHandling from './components/eventhandling';
import Clock from './components/clock';
import { useState } from 'react';
import { ProductProvider } from './Context/productcontext';

function App() {

  const [count, setCount] = useState(0);

  return (
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
          <Clock count={count} setCount={setCount}></Clock>

        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;