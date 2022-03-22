import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img 
        className='header_logo'
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        {/* logo */}
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span classname='header_optionLineOne'>
            Hello User
          </span>
          <span classname='header_optionLineTwo'>
            Sign In
          </span>
        </div>
        <div className='header_option'>
          <span classname='header_optionLineOne'>
            returns
          </span>
          <span classname='header_optionLineTwo'>
            & orders
          </span>
        </div>
        <div className='header_option'>
          <span classname='header_optionLineOne'>
            Your
          </span>
          <span classname='header_optionLineTwo'>
            Prime
          </span>
        </div>
      </div>

    </div>
  )
}

export default Header