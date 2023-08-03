import React, { useState } from 'react'
import Slider from "react-slick";
import {
    bannerImgOne,bannerImgFive,bannerImgThree,advertizement,bannerImgFour,bannerImgTwo
}from '../assets/index'
const Banner = () => {
    const [activedot, Setactivedot]= useState(0)
    const settings = {
        dots: true,
        infinite: true,
autoplay:true,
       arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange:(prev, next)=>{
            Setactivedot(next)
        },
        appendDots: dots => (
            <div
              style={{
             position:"absolute",
             top:"70%",
             left:"0",
             right:'0',
             margin:"0 auto",
             transform:"translate(-50% -50%)",
             width:"210px"
              }}
            >
              <ul style={{ 
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between"

               }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
             i === activedot
             ?{
                background:"#131921",
             width:"30px",
             height:"30px",
             borderRadius:"50%",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             color:"white",
             padding:"8px 0",
             cursor:"pointer",
             border:"1px solid #f3a847"  
             }:
             {
                background:"#131921",
             width:"30px",
             height:"30px",
             borderRadius:"50%",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             color:"white",
             padding:"8px 0",
             cursor:"pointer",
             border:"1px solid #f3a847"  
             }
                
              }
            >
              {i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
  <div className='w-full'>
      <div className='w-full h-full relative'>
 
 <Slider {...settings}>
   
   
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
  </div>
  )
}

export default Banner
