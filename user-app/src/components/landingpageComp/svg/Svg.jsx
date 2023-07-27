import React from 'react'
import './svg.css'

const Svg = () => { 
  return (
    <div style={{ width:'100%'}} className='svgbox'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{marginTop:'-25rem'}}>
    <path fill="#ffff" fillOpacity="1" d="M0,288L120,277.3C240,267,480,245,720,218.7C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
    </svg>
  </div>
  )
}

export default Svg