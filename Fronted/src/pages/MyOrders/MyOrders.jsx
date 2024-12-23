import React, { useContext, useState, useEffect } from 'react'
import './Myorders.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets'
import axios from 'axios'
function MyOrders() {
    const {url,token} = useContext(StoreContext)
    const [data,setData] = useState([])

    const fetchOrders = async (req,res)=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders()
        }
    },[token])

    if (!data || data.length === 0) {
        return <div></div>
    }

  return (
    <div className='my-orders'>
        <h2>My orders</h2>

         <div className="container">
            {data.map((order,index)=>{
                return (
                    <div key={index} className="my-orders-order">
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if(index===order.items.length-1){
                                return item.name+" x " + item.quantity
                            }
                            else{
                                return item.name+" x " + item.quantity+" , "  
                            }
                        })}</p>

                        <p>Rs. {order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf; </span> <b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>

                )
            })}
        </div>
    </div>
  )
}

export default MyOrders