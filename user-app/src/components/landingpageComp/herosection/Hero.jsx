import React from 'react'
import "./hero.css"
import heroImg from "../../../assets/Group 213 (1).png"

const Hero = () => {
  return (
    <>
    <div className='heroSection'>
        <div className="herocontainer">
        <div className='herodetails'> 
            <div className="herodetail">
                <div className="detailinfo">
                  <h3 className='herobtd'>Play<sup className='herobx'></sup> Learn<span className='herobx'></span> Earn<span className='herobx'></span></h3>
                  <p className='subbtd'>The Pace App is the perfect way to improve your learning experience with fun and rewards</p>
                </div>
                <div className="infolink">
                  <a href="https://chat.whatsapp.com/Ed1itTGl97QIuoHdMQmlJT" target="_blank" rel='noreferrer' className='herolink'>Practice Now</a>
                </div>
                 </div>
                 </div>
              <div className="heroImg">
                <img src={heroImg} alt="heroImg" />   
              </div>
        </div> 
        </div>
      </>
  )
}

export default Hero