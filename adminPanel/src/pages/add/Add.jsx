import React from 'react'
import './Add.css'
import { assets } from '../../assets/admin_assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
function Add({url}) {
  const [image,setImage]=useState(false)
  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"salad"
  })

  const onChangeHanlder=(event)=>{
    const name = event.target.name
    const value= event.target.value
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async (event)=>{
    event.preventDefault()
    const formData = new FormData()
    formData.append("name",data.name.toLowerCase())
    formData.append("description",data.description.toLowerCase())
    formData.append("price",Number(data.price))
    formData.append("category",data.category.toLowerCase())

    // for(let [key,value] of formData.entries()){
    //   console.log(key,value)
    // }
    formData.append("image",image)
    const response = await axios.post(`${url}/api/food/add`,formData)
    if(response.data.success){
      ({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })

      setImage(false)
      toast.success(response.data.message)

    }else{
      toast.error(response.data.message)
    }

  }

  // useEffect(()=>{
  //   console.log(data)
  // },[data])
  
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-uplaod flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0]) } type="file" id="image" hidden required/>
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHanlder} type="text" name="name" placeholder='Type here' value={data.name}/>
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHanlder} value={data.description} name="description" rows="6" placeholder='write content here'></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product</p>
            <select onChange={onChangeHanlder} name="category">
              <option value="salad">Salad</option>
              <option value="rolls">Rolls</option>
              <option value="deserts">Desert</option>
              <option value="sandwich">Sandwich</option>
              <option value="cake">Cake</option>
              <option value="pure Veg">Pure Veg</option>
              <option value="pasta">Pasta</option>
              <option value="noodles">Noddles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p className="product-price">Product Price</p>
            <input onChange={onChangeHanlder} value={data.price} type="Number" name="price" placeholder='$20'/>
          </div>
        </div>

        <button type="submit" className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add