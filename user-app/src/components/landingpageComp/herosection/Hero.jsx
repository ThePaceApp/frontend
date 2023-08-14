import React from 'react'
import "./hero.css"
import heroIg from "../../../assets/Group 213 (1).png"


const Hero = () => {
  return (
    <>
    <div className='heroSection'>
        <div className="herocontainer">
        <div className='herodetails'> 
            <div className="herodetail">
                <div className="detailinfo">
                  <p className='herobtd'>Play<div className='herobx'></div> Learn<div className='herobx'></div> Earn<div className='herobx'></div></p>
                  <p className='subbtd'>The Pace App make studying fun and also reward you.</p>
                </div>
                <div className="infolink">
                  <a href="https://chat.whatsapp.com/Ed1itTGl97QIuoHdMQmlJT" className='herolink'>Practice Now</a>
                </div>
                 </div>
                 </div>
            <div className="heroImg">
                <img src={heroIg} alt="heroImg" />   
            </div>
        </div> 
        </div>
      </>
  )
}

export default Hero