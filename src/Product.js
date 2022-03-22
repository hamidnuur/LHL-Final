import React from "react";
import "./Product.css";


function Product() {
  
  return (
    <div className="product">

      <div className="product__info">

        <p className="product__price">
          <small>$</small>
          <strong>29.99</strong>
        </p>
        <div className="product__rating">

        </div>
      </div>

      <img src='' alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;