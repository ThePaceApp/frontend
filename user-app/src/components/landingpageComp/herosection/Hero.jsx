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
                 <p className='herobtd'>Play,Learn,Earn <div className='herobx'></div></p>
                 <p className='subbtd'>The Pace App make studying fun and also reward you.</p>
                 <div className="herolinks">
                    <a href="https://chat.whatsapp.com/Ed1itTGl97QIuoHdMQmlJT" className='herolink'>Join Community</a>
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