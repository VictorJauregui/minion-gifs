import { useState } from 'react'
import like from '../../assets/like.png'
import share from '../../assets/share.png'


const CardGif = ({gif}) => {

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="min-w-[16rem] h-80 relative cursor-pointer" onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}>
                        <img className={`w-full h-full rounded-lg ${!isHovered ? '' : 'opacity-40 cursor-pointer pointer-events-none'}`} src={gif.imageGif}alt="gif"/>
                        {isHovered && (
                            <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-5">
                            <p className="font-bold text-lg opacity-90 text-white">{gif.nameGif}</p>
                            <div className="flex items-end justify-center gap-5">
                                <img className="w-10 opacity-90" src={like} alt="" />
                                <img className="w-10 opacity-90" src={share} alt="" />
                            </div>
                            </div>
                        )}
                    </div>
  )
}

export default CardGif