import React from 'react'
import './donate.css'
import don from "../../../assets/donateImg.png"

const Donate = () => {
  return (
    <div className='donateCard'>
      <div className='donateImg'>
        <img src={don} alt="donateImg" />
      </div>
      <div className='donateinfos'> 
        <div className='donateinfo'>
          <h3>We need your donation</h3>
          <p>Our aim has been to ensure that students don’t engage in fradulent activities. </p>
          <p>We created a platform for them to earn while playing and learning.</p>
          <p>With our current growing rate, we need your help to meet up.</p>
          <div className='donateBtn'>
            <a href="https://wa.me/2349032565436/?text=My%20name%20is%20___.%20I'd%20love%20to%20discuss%20donation%20and%20partnership" target='_blank'rel="noreferrer" className='donateBtn'>Donate</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate