import React from 'react'
import paceImg from "../../../assets/PaceAppLogo.png"
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
        <div className="navIcon">
            <img src={paceImg} alt="PaceLogo"/>
            <h5>The Pace App</h5>
        </div>
          <div className="media">
            <h4 style={{marginBottom:'15px', letterSpacing:'1px'}}>SOCIAL MEDIA</h4>
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
              <li>Terms of service</li>
              <li>Privacy policy</li>
              
            </ul>
          </div>
        </div>
        <div className='company'>
          <div>
            <h4>Contacts</h4>
          </div>
          <div>
            <ul>
              <li><a href="tel:09032565436" style={{textDecoration:"none",color:"white"}}>+234 9032123212</a> </li>
              <li><a href="mailto:thepaceappng@gmail.com" style={{textDecoration:"none",color:"white"}}>support@thepaceapp.com</a></li>
            </ul>
          </div>
        </div>
        </div>
        <div className="footercopy">
          <img src={Nig} alt="" width={'30px'} height={'10px'}/>
           ©  2023 The Pace App. All rights reserved
        </div>
    </div>
  )
}

export default Footer 