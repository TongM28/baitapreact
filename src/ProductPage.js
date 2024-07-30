import React from 'react';
import Product from './Product';

function ProductPage({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;