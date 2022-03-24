import React from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
        <div className='payment'>
      <div className='payment__container'>
          {/* Payment section - delivery address */}
          <div className='payment__section'>
              <div className='payment__title'>
                  <h3> Delivery Address</h3>
              </div>
              <div className='payment__address'>
                  <p>{user?.email}</p>
                  <p>555 Dundas Street</p>
                  <p>Toronto, Ontario</p>

              </div>


          </div>

          {/* Payment section - Review Items */}
          <div className='payment__section'>
          <div className='payment__title'>
              <h3>Review items and delivery</h3>
             
             <div className='payment__items'>
             {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

             </div>
                 
           </div>
          </div>

          {/* Payment section - Payment method */}
          <div className='payment__section'>

          </div>
          

      </div>
        

    </div>
  )
}

export default Payment