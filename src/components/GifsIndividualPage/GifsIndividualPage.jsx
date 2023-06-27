import React, { useContext, useState } from 'react'
import like from '../../assets/like.png'
import share from '../../assets/share.png'
import blueHeart from '../../assets/blueHeart.png'
import partyCard from '../../assets/partyCard.png'
import LoveCard from '../../assets/LoveCard.png'
import smileCard from '../../assets/SmileCard.png'
import GiftContext from '../../context/GiftsContext'

const GifsIndividualPage = ({gif}) => {
    const [isHovered, setIsHovered] = useState(false)
    const { dataGifs, setDataGifs, updateGif } = useContext(GiftContext);

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleLike = (e) => {
        e.stopPropagation();
        const updatedGifs = dataGifs.map((minion) => {
            if (gif._id === minion._id) {
              return { ...gif, liked: !gif.liked };
            } else {
              return minion;
            }
          });
          const currentGif = { ...gif, liked: !gif.liked };
          updateGif(gif._id, currentGif);
          setDataGifs([...updatedGifs]);
    }
    
  return (
    <div className='relative cursor-pointer min-h-[20rem] max-h-[20rem]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img className={gif.typeGif==="Party" ? ' w-20 absolute flex justify-end mt-2' : "hidden"} src={partyCard} alt="" />
                    <img className={gif.typeGif==="Love" ? ' w-20 absolute flex justify-end mt-2' : "hidden"} src={LoveCard} alt="" />
                    <img className={gif.typeGif==="Smiling" ? ' w-20 absolute flex justify-end mt-2' : "hidden"} src={smileCard} alt="" />
                            <img className={`w-full h-full rounded-lg ${!isHovered ? 'min-h-[20rem] max-h-[20rem]' : 'opacity-40 cursor-pointer pointer-events-none  min-h-[20rem] max-h-[20rem]'}`} src={gif.imageGif} alt=""/>
                                    {isHovered && (
                                        <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-5">
                                            <p className="font-bold text-lg opacity-90 text-white">{gif.nameGif}</p>
                                            <div className="flex items-end justify-center gap-5">
                                                <img className="w-10 opacity-90" src={gif.liked ? blueHeart : like} onClick={handleLike} alt="" />
                                                <img className="w-10 opacity-90" src={share} alt="" />
                                            </div>
                                        </div>   
                                    )}
                        </div>
  )
}

export default GifsIndividualPage