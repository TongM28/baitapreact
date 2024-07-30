import React from 'react';


function Product({ product }) {
  return (
    <div className="product">
      <div>
      <img src={product.photoName} alt={product.name} />
      </div>
     <div>
     <h2>{product.name}</h2>
      <p>RAM: {product.ram}</p>
      <p>Price: {product.price}</p>
      <button>Buy Now</button>
     </div>
    </div>
  );
}

export default Product;