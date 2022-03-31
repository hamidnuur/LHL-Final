import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
  
    return (
      <div className="checkout">
        <div className="checkout-left">
          <img
            className="checkout-ad"
            src="./images/checkout-banner.png"
            alt=""
          />
  
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout-title">Your shopping Basket</h2>

            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
            {/* {BasketItem */}
            {/* {BasketItem */}
            {/* {BasketItem */}
            {/* {BasketItem */}
          </div>
        </div>
  
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    );
  }
  
  export default Checkout;