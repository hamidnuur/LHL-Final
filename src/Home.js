import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        
        <img className='home__image'
        src='images/home-wallpaper2.png'
        alt=''
        />

        <div className='home__row'>
          <Product 
            id='123123123'
            title='Nas - Illmatic' 
            price={29.99} 
            rating={4}
            image={'https://miro.medium.com/max/1000/1*gBGKRRH9UJkZpuTplgdnsQ.jpeg'}
          />
          <Product 
            id='213213213'
            title='Ye - The College Dropout' 
            price={29.99} 
            rating={4}
            image={'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F0bffd93463afe53e7f651f72bedfc78b.1000x1000x1.jpg'}
          />
          <Product 
            id='321321321'
            title='Kendrick Lamar - Good kid, m.A.A.d city' 
            price={29.99} 
            rating={4}
            image={'https://miro.medium.com/max/1000/1*28A8Y3r-dCyv6pZ5_XEMPg.jpeg'}
          />
          <Product 
            id='321321321'
            title='Outkast - Stankonia' 
            price={29.99} 
            rating={4}
            image={'https://media.pitchfork.com/photos/5a7e076f1bcb940ab644b768/1:1/w_600/stankonia.jpg'}
          />
        </div>

        <div className='home__row'>
          <Product 
            id='123123123'
            title='Jay-Z - Resonable Doubt' 
            price={29.99} 
            rating={4}
            image={'https://miro.medium.com/max/1000/1*UExS7LB-GV9pqWWJVuJU0g.jpeg'}
          />
          <Product 
            id='213213213'
            title="50 Cent - Get Rich or Die Tryin'"
            price={29.99} 
            rating={4}
            image={'https://miro.medium.com/max/1000/1*nijoe3-CnkciDDR71xPAUA.jpeg'}
          />
          <Product 
            id='321321321'
            title='Geto Boys - We Cant Be Stopped' 
            price={29.99} 
            rating={4}
            image={'https://miro.medium.com/max/1000/1*WwtqhN8aOZVpvIqQIpw-Hg.jpeg'}
          />
          <Product 
            id='321321321'
            title='Dr. Dre - The Chronic' 
            price={29.99} 
            rating={4}
            image={'https://miro.medium.com/max/1000/1*NQA2yhofox63ZMh3gmcofw.jpeg'}
          />
        </div>

        <div className='home__row'>
          <Product 
            id='123123123'
            title='The Notorious B.I.G. - Ready To Die' 
            price={29.99} 
            rating={4}
            image={'https://miro.medium.com/max/1000/1*Np5PL6EI9045CXNW2kw7yw.jpeg'}
          />
          <Product 
            id='213213213'
            title='ODB - Return to the 36 Chambers' 
            price={29.99} 
            rating={4}
            image={'https://miro.medium.com/max/1000/1*E_6u0nQlNsKw6uCGsGFLgQ.jpeg'}
          />
          <Product 
            id='321321321'
            title='2Pac - All Eyez on Me' 
            price={29.99} 
            rating={4}
            image={'https://images-na.ssl-images-amazon.com/images/I/41OvOwx9J2L._SY355_.jpg'}
          />
          <Product 
            id='321321321'
            title='ATCQ - Midnight Marauder' 
            price={29.99} 
            rating={4}
            image={'https://i.pinimg.com/originals/2d/5e/94/2d5e94bdacf82cc8747809ff7ef05a22.jpg'}
          />
        </div>

        <div className='home__row'>
          <Product 
            id='123123123'
            title='Wu Tang Clan - 36 Chambers' 
            price={29.99} 
            rating={4}
            image={'https://images-na.ssl-images-amazon.com/images/I/71h631BJGLL._SL1417_.jpg'}
          />
          <Product 
            id='213213213'
            title='Mos Def - Black on Both Sides' 
            price={29.99} 
            rating={4}
            image={'https://images.rapgenius.com/bf7353f5f5a2afdc8407023eba7ba268.200x196x1.jpg'}
          />
          <Product 
            id='321321321'
            title='Tyler, The Creator - Flower Boy' 
            price={29.99} 
            rating={4}
            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Jmut2bnfjw8zQ_Y0e_MRZ0i6PHEacRrX6w&usqp=CAU'}
          />
          <Product 
            id='321321321'
            title='Drake - Take Care' 
            price={29.99} 
            rating={4}
            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUrEQsFJeLBL16rbkafQDCHOrea6W-gn_Vw&usqp=CAU'}
          />
        </div>

      </div>

    </div>
  )
}

export default Home