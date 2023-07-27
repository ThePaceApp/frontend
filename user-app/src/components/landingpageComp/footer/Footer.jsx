import React from 'react'
import paceLogo from '../../../assets/paceimg.png'
import './footer.css'
import Nig from '../../../assets/nig.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {BiLogoLinkedin} from "react-icons/bi"

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className="footerfluid">
        <div className="footerLogo">
          <div className="logofot">
            <img src={paceLogo} alt="paceapp" />
          </div>
          <div className="media">
            <h4 style={{marginBottom:'15px'}}>SOCIAL MEDIA</h4>
            <FacebookRoundedIcon style={{marginRight:"10px"}}/>
            <InstagramIcon style={{marginRight:"10px"}}/>
            <TwitterIcon style={{marginRight:"10px"}}/>
            <BiLogoLinkedin style={{fontSize:'25px'}}/>
          </div>
        </div>
        <div className='company'>
          <div>
            <h4>Company</h4>
          </div>
          <div>
            <ul>
              <li>About us</li>
              <li>Donate</li>
              <li>How to Play</li>
              <li>Blog</li>
              <li>Blog</li>
              <li>FAQS</li>
            </ul>
          </div>
        </div>
        <div className='company'>
          <div>
            <h4>Legal</h4>
          </div>
          <div>
            <ul>
              <li>About us</li>
              <li>Donate</li>
              
            </ul>
          </div>
        </div>
        <div className='company'>
          <div>
            <h4>Contacts</h4>
          </div>
          <div>
            <ul>
              <li>About us</li>
              <li>Donate</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="footercopy">
          <img src={Nig} alt="" width={'30px'} height={'10px'}/>
          Copyright ©  2021-2021 The Pace App. All rights reserved.
        </div>
    </div>
  )
}

export default Footer