import React, { useRef } from 'react'
import Navbar from '../../components/landingpageComp/Nav/Navbar'
import Hero from '../../components/landingpageComp/herosection/Hero'
import Svg from '../../components/landingpageComp/svg/Svg'
import Details from '../../components/landingpageComp/appdetail/Details'
import Slider from '../../components/landingpageComp/slider/Slider'
// import Blog from '../../components/landingpageComp/blog/Blog'
import BlogData from '../../BlogData'
import Donate from '../../components/landingpageComp/donate/Donate'
import About from '../../components/landingpageComp/about/About'
import Footer from '../../components/landingpageComp/footer/Footer'

const LandingPage = () => {
  const hero = useRef(null);
  const details= useRef(null);
  const donated = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
        <Navbar scrollToSection={scrollToSection} hero={hero} details={details} donated={donated}/>
      <div style={{overflowX:'hidden'}}>

        <div ref={hero}>
        <Hero/>
        </div>
        <Svg/>
        <div ref={details} style={{paddingTop:"30px"}} >
          <Details/>
        </div>
        <Slider/>
        <BlogData />
        <div ref={donated} style={{paddingTop:"100px"}}>
        <Donate/>
        </div>
        <About/>
        <Footer/>
    </div>
    </div>
  )
}

export default LandingPage