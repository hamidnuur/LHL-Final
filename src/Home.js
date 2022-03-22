import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        
        <img className='home__image'
        src='images/home-wallpaper.png'
        alt=''
        />

        <div className='home__row'>
          <Product 
            title='DVSN - SEPT 9TH' 
            price={29.99} 
            image={'https://cdn.shopify.com/s/files/1/0094/8718/8015/products/71TF1tS2NLL._AC_SX425_400x.jpg?v=1625689136'}
          />
          <Product 
            title='DVSN - SEPT 9TH' 
            price={29.99} 
            image={'https://cdn.shopify.com/s/files/1/0094/8718/8015/products/71TF1tS2NLL._AC_SX425_400x.jpg?v=1625689136'}
          />
          <Product 
            title='DVSN - SEPT 9TH' 
            price={29.99} 
            image={'https://cdn.shopify.com/s/files/1/0094/8718/8015/products/71TF1tS2NLL._AC_SX425_400x.jpg?v=1625689136'}
          />
        </div>

        <div className='home__row'>
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className='home__row'>
          {/* Product */}
        </div>

      </div>

    </div>
  )
}

export default Home