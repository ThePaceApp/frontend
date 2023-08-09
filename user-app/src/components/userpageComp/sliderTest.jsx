import { SliderTestData } from './SliderTestData';
import './sliderttest.css'
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerHeight, window.innerWidth]);
    window.addEventListener("resize", handleResize);
  }, [])
  return size;
}


const array = SliderTestData.map((x) => {
  return x.image;
})

console.log(array);

const SliderTest = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <AiOutlineArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <AiOutlineArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const [height, width] = useWindowSize();

  const settings = {
    className: "center",
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: width > 1000 ? 1: 1,
    centerMode: true,
    centerPadding: "60px",
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      console.log(current);
      setImageIndex(next);
    }
  };
    return (
      <section className='slider'>
            <div className="slid">
                <Slider {...settings}>
                  {array.map((img, idx) => (
                    <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                      <img src={img} alt={img} />
                    </div>
                  ))}
                </Slider>
            </div>
      </section>
    );
  };
export default SliderTest