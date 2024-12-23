import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/frontend_assets/assets'
function Exploremenu({category,setCategory}) {
    
  return (
    <div className='explore-menu' id="explore-menu">
        <h1>Explore Our menu</h1>
        <p className='explore-menu-text'>Experience the taste of our kitchen from the comfort of your home! Tomato Delivery brings our signature dishes straight to your door, crafted with fresh ingredients and a passion for flavor. </p>

        <div className='explore-menu-list'>
            {
                menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>{setCategory(prev=>prev===item.menu_name.toLowerCase()?'All':item.menu_name.toLowerCase())}} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name.toLowerCase()?'active':''} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>

        <hr />
    </div>
  )
}

export default Exploremenu