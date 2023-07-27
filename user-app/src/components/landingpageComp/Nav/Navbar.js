import React, { useEffect, useState } from 'react'
import './navbar.css'
import paceImg from "../../../assets/paceimg.png"

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
          <img src={paceImg} alt="PaceLogo" width={'200px'}/>
        </div>
        <div className="navLinks">
          <li className="linkuse" id='hero' onClick={() => scrollToSection(hero)}>Home</li>
          <li className="linkuse"  onClick={() => scrollToSection(details)}>About</li>
          <li href="/" >How to Play</li>
          <li onClick={() => scrollToSection(donated)} className="linkuse">Donate</li>
          <li className='linkTag' style={{color:"#16956C"}}>Play</li>
        </div>
      </div>
    </nav>
  )
}

export default Navbar