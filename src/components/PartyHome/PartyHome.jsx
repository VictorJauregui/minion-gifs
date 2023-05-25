import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import '../Swiper/Swiper.css'
import { Autoplay, Navigation } from "swiper";
import SmilingGifts from "../SmilingGifts/SmilingGifts";
import partyGifs from "./PartyGifs";
import PartyGifs from './PartyGifs';

const PartyHome = () => {

    // const handleReachEnd = (swiper) => {
    //     const lastIndex = filterArtists.length - 1;
    //     const currentLastIndex = swiper.realIndex;
    //     if (currentLastIndex === lastIndex) {
    //       swiper.slideTo(0, 0, false);
    //     }
    //   };
  return (
    <div>
    <Swiper 
        slidesPerView={4} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true} 
        modules={[ Autoplay, Navigation]}
        // onReachEnd={handleReachEnd}
        className="mySwiper"
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            "@0.40": {
                slidesPerView: 2,
                spaceBetween: 5,
              },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            "@1.00": {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            "@1.25":{
                slidesPerView: 4,
                spaceBetween: 5,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            "@2.00": {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              "@2.50": {
                slidesPerView: 6,
                spaceBetween: 5,
              },
          }}
        ></Swiper>
        <div className='w-[90%] lg:w-4/6 mx-auto' >
            <PartyGifs />
        </div>
    </div>
  )
}

export default PartyHome