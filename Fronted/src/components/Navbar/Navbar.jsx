import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navabr.css'
import {assets} from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
import {useNavigate} from "react-router-dom"
function Navbar({setShowlogin}) {
    const [menu,setMenu]=useState("home")
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate = useNavigate()
    const logout=()=>{
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }
  return (
    <div className='fixed-navbar'>
    <div className='navbar'>
        <Link to='/'><img  src={assets.logo} alt="" className="logo" /></Link>

        <ul className='navbar_menu'>
            <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':""}>contact us</a>
        </ul>

        <div className="navbar-right">
            {/* <img src={assets.search_icon} alt="" /> */}
            <div className="navbar_searchicon">
                <Link to='/cart' onClick={()=>setMenu('cart')} className={menu==='cart'?'active':""}><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>

            {token.length===0 ? <button onClick={()=>setShowlogin(true)}>Sign-in</button>
            :<div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                    <Link to="/myorders"><li> Orders</li></Link>
                    <hr />
                    <li onClick={logout}>Logout</li>
                </ul>
                </div>}
            
        </div>
    </div>
    </div>
  )
}

export default Navbar