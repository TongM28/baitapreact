import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductPage from "./ProductPage"
import AppleProduct from './AppleProduct.json';

function App() {
  return (
    <div className="app">
      <Header />
      <h1> Apple's Products List </h1>
      <ProductPage products={AppleProduct} />
      <Footer />
    </div>

  );
}

export default App;