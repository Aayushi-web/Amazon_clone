import React from 'react'
import Slider from "react-slick";
import {
    bannerImgOne,bannerImgFive,bannerImgThree,advertizement,bannerImgFour,bannerImgTwo
}from '../assets/index'
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
autoplay:true,
       arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
 
    <Slider {...settings}>
      <div>
   <img src={advertizement} alt=''/>
      </div>
      <div>
   <img src={bannerImgOne} alt=''/>
      </div>
      <div>
   <img src={bannerImgFour} alt=''/>
      </div>
      <div>
   <img src={bannerImgTwo} alt=''/>
      </div>
      <div>
   <img src={bannerImgThree} alt=''/>
      </div>
      <div>
   <img src={bannerImgFive} alt=''/>
      </div>
      
      
    </Slider>
  </div>
  )
}

export default Banner
