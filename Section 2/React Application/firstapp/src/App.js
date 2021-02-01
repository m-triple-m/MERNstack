import './App.css';
import Home from './components/home';
import Login from './components/login';
import ProductList from './components/productlist';

function App() {
  return (
    <div>
      <h1>Welcome to React App</h1>
      <Home />
      <Login />
      <ProductList />
    </div>
  );
}

export default App;