import { Autoplay, Navigation } from "swiper";
import LoveGifs from "../LoveGifs/LoveGifs";

const LoveHome = () => {

    // const handleReachEnd = (swiper) => {
    //     const lastIndex = filterArtists.length - 1;
    //     const currentLastIndex = swiper.realIndex;
    //     if (currentLastIndex === lastIndex) {
    //       swiper.slideTo(0, 0, false);
    //     }
    //   };
  return (
    <div>
        <div className='w-[90%] lg:w-4/6 mx-auto' >
            <LoveGifs />
        </div>
    </div>
  )
}

export default LoveHome