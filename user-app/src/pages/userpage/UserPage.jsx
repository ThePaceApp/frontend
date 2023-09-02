import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import pacelogo from "../../assets/PaceAppLogo.png"

const UserPage = () => {
  return (
    <div className='loginContainer'>
    <div className="smslog">
      <div className="sms">
      <img src={pacelogo} alt="" />
      <h5 className='log'>The Pace App</h5>
      </div>
    </div>
    <div className='loginDet'> 
      <div className="loginform">
      <Outlet/>
    </div>
    </div>
    </div>
  )
}

export default UserPage