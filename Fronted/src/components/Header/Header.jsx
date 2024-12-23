import React from 'react'
import './Header.css'
import { assets } from '../../assets/frontend_assets/assets'
function Header() {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Taste the goodness of our restaurant from the comfort of your home! Tomato Delivery brings our delicious, freshly prepared meals directly to your doorstep. With a menu full of our signature dishes . Order now|</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header