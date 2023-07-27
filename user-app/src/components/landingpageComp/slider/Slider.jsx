import React, { useState } from 'react'
import './slider.css'
import { CarouselItem } from './CarouselItem'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'



const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      CandidateName: "Ajibade Robiat",
      Mode:"UTME Student",
      description:"The Pace App helps me learn in a fun way. It helps me relax and the Earnings motivates me.",
      Comment:"Its a very good initative.",
      image:"Candidate1"
    },
    {
      CandidateName: "Abiola Kazeem",
      Mode:"A'level Student",
      description:"The Pace App helps me learn in a fun way. It helps me relax and the Earnings motivates me.",
      Comment:"Its a very good initative.",
      image:"candidate3"    
    },
    {
      CandidateName: "Uzoh Emi",
      Mode:"Waec Student",
      description:"The Pace App helps me learn in a fun way. It helps me relax and the Earnings motivates me.",
      Comment:"Its a very good initative.",
      image:"candidate2"
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className='sliderCont'>
        <div className="slidertop">
            <h1>What Our Users are Saying</h1>
            <p>These are recently verified customer stories & feedback</p>
        </div>
        <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)`
       }}
        >
          {items.map((item) => {
            return <CarouselItem item={item} width={"100%"} />;
          })}
        </div>
  
        <div className="carousel-buttons">
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
          <AiOutlineArrowLeft/>
          </button>
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
          <AiOutlineArrowRight/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider 