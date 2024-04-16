import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

import Home from './Home';
import About from './About';
import Cart from './Cart';
import Categories from './Categories';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Navbar from './Navbar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 19.99 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 29.99 },
  ];

  return (
    <>
      <div className="bg">
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={<Products products={products} addToCart={addToCart} />}
          />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
