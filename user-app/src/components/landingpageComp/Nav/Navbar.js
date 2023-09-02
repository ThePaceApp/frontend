import React, { useEffect, useState } from 'react'
import './navbar.css'
import paceImg from "../../../assets/PaceAppLogo.png"
import { Link } from 'react-router-dom'

const Navbar = ({scrollToSection,hero, details,donated}) => {
  const [sticky, setSticky] =useState(false)

  useEffect(()=>{
    const handleScroll = () =>{
      setSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll',handleScroll)
  })
  return (
    <nav className={`${sticky ? "sticky":""}`}>
      <div className="Navsms">
        <div className="navIcon">
          <img src={paceImg} alt="PaceLogo"/>
          <h5>The Pace App</h5>
        </div>
        <div className="navLinks">
          <li className="linkuse" id='hero' onClick={() => scrollToSection(hero)}>Home</li>
          <li className="linkuse"  onClick={() => scrollToSection(details)}>About</li>
          {/*<li href="/" >How to Play</li>*/}
          <li onClick={() => scrollToSection(donated)}>Donate</li>
          <Link to ="/User" className='linkTag'><a className='linkTag' style={{color:"#16956C"}} href="https://chat.whatsapp.com/Ed1itTGl97QIuoHdMQmlJT">Play</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar