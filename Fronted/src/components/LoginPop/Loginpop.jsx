import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
function Loginpop({setShowlogin}) {
    const {url,setToken}=useContext(StoreContext)
    const [currentState,setCurrentState]=useState('login')
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event)=>{
        event.preventDefault()
        let newUrl=url
        if(currentState==="login"){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }

        const response = await axios.post(newUrl,data)
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowlogin(false)
        }
        else{
            alert(response.data.message)
        }

        console.log(response)
    }

  return (
    <div className='login-pop'>
        <form onSubmit={onLogin}  className="login-pop-container">
            <div className="login-pop-title">
                <h2 >{currentState}</h2>
                <img onClick={()=>{setShowlogin(false)}} src={assets.cross_icon} alt="" />
            </div>

            <div className="login-pop-input">
                {currentState==='login'?<></>:  <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
                <input name='email' onChange={onChangeHandler} value={data.email}  type="email" placeholder='Your email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
            </div>

            <button type="submit">{currentState==="signup"?"Create account":"Login"}</button>

            <div className="login-pop-up-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use and privacy policy</p>
            </div>

            {currentState==='login'?<p>Create a new account? 
                <span onClick={()=>setCurrentState('signup')}>Click here</span></p>:
            <p>Already have an account <span onClick={()=>setCurrentState('login')}>Login</span></p>}
        </form>
    </div>
  )
}

export default Loginpop