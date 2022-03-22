import React from "react";
import "./Product.css";


function Product() {
  
  return (
    <div className="product">

      <div className="product__info">
        <p> DVSN - SEPT 9TH</p>
        <p className="product__price">
          <small>$</small>
          <strong>29.99</strong>
        </p>
      </div>

      <img src='https://cdn.shopify.com/s/files/1/0094/8718/8015/products/71TF1tS2NLL._AC_SX425_400x.jpg?v=1625689136' alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;