import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Cart from './Pages/Cart.js';
import Checkout from './Pages/Checkout.js';
import Layout from './Layout.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
