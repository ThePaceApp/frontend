import React, { useState } from 'react'
import "./slider.css"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { SliderTestData } from './SliderTestData';


const MAX_VISIBILITY = 2;

const Card = ({ CandidateName,pic,Comment,Mode,title}) => (
  <div className='card'>
      <div className="cardImg">
      <img src={require("../../../assets/" + pic + `.png`)}  alt="BlogImg"  />
      </div>
      <div className="cardInfo">
      <h4>{CandidateName}</h4>
      <p className='mode'>{Mode}</p>
      <p className="tit">{title}</p>
      <p className='comment'>{Comment}</p>
      </div>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      <div className="next">
        {active < count - 1 && <button className='nav left' onClick={() => setActive(i => i + 1)}><AiOutlineArrowLeft/></button>}
      </div>
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 4,
            '--direction': Math.sign(active -  i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '1' : '',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'flex',
          }}>
          {child}
        </div>
      ))}
      <div className="right">
        {active > 0 && <button className='nav right' onClick={() => setActive(i => i - 1)}><AiOutlineArrowRight/></button>}
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <div className='sliderCont'>
        <div className="slidertop">
            <h1>What Our Users are Saying</h1>
            <p>These are recently verified customer stories & feedback</p>
        </div>
        <Carousel>
        {SliderTestData.map((Slides) => (
          <Card 
          title={Slides.description} 
            pic={Slides.image}
            CandidateName= {Slides.CandidateName}
            Mode={Slides.Mode}
            description="The Pace App helps me learn in a fun way. It helps me relax and the Earnings motivates me."
            Comment={Slides.Comment}
            image="Candidate1"
             />
        ))}
      </Carousel>
    </div>
  )
}

export default Slider