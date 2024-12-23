import React from 'react'
import './Orders.css'
import { useState , useEffect} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import {assets} from '../../assets/admin_assets/assets'
function Orders({url}) {
  const [orders,setOrders] = useState([])
  const fetchAllorders = async()=>{
    const response = await axios.get(url+"/api/order/list")
    if(response.data.success){
      setOrders(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  const statusHanlder = async (event,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      updateStatus:event.target.value
    })
    if(response.data.success){
     await fetchAllorders() 
    }
  }

  useEffect(()=>{
    fetchAllorders()
  },[])
  return (
    <div className='order add'>
      <h3>Order Page</h3>

      <div className="admin-order-list">
        {orders.map((order,index)=>{
          return (<div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />

            <div>
              <p  className="order-item-food">
                {order.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name + " x " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity
                  }
                })}
              </p>

              <p className = "order-item-name">{order.address.firstName+" "+order.address.lastName}</p>
              <div className="order-item-addrress">
                <p>{order.address.street +" , "}</p>
                <p>{order.address.city +" , " + order.address.state + " ," + order.address.country + " ," + order.address.zipcode+ " ,"}</p>
              </div>

              <p className="order-item-phone">{order.address.phone}</p>
            </div>

            <p>Items : {order.items.length}</p>
            <p>Rs. {order.amount}</p>

            <select onChange={(event)=>statusHanlder(event,order._id)} >
              <option value="Food processing">Foods Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders