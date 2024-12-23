import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Loginpop from './components/LoginPop/Loginpop'
import Verifiy from './pages/Verify/Verifiy'
import MyOrders from './pages/MyOrders/MyOrders'
function App() {
  const [showLogin,setShowlogin]=useState(false)
  return (
    <>
    {showLogin?<Loginpop setShowlogin={setShowlogin}></Loginpop>:<></>}
     <div className='app'>
      <Navbar setShowlogin={setShowlogin}></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/cart' element={<Cart></Cart>}></Route> 
        <Route path='/placeorder' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path="/verify" element={<Verifiy></Verifiy>}></Route>
        <Route path="/myorders" element={<MyOrders></MyOrders>}></Route>
      </Routes>
    </div>

    <Footer></Footer>
    </>
   
  )
}

export default App