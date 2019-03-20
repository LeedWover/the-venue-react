import React from "react";
import Slider from "react-slick";

import SlideOne from '../../images/slide_one.jpg';
import SlideTwo from '../../images/slide_two.jpg';
import SlideThree from '../../images/slide_three.jpg';

const Carrousel = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden'
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${SlideOne})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${SlideTwo})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${SlideThree})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Carrousel;