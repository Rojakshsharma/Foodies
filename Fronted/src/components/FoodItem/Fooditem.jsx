import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
function Fooditem({id,name,price,description,image}) {
    const {url} = useContext(StoreContext)
    const {cartItems,
        addToCart,
        removeFromCart} =useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={url+"/images/"+image}  alt=""  className='food-item-img'/>
            {
                !cartItems[id]?<img onClick={()=>addToCart(id)} className='add' src={assets.add_icon_white} alt="" />:
                <div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>

        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
            </div>

            <p className="food-item-description">
                {description}
            </p>

            <p className="food-item-price">Rs.{price}</p>
        </div>
    </div>
  )
}

export default Fooditem