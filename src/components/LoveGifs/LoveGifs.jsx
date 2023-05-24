import { useState } from 'react'
import love from '../../assets/happy.gif'
import like from '../../assets/like.png'
import share from '../../assets/share.png'

const LoveGifs = () => {

const [isHovered, setIsHovered] = useState(false)

const handleMouseEnter = () => {
    setIsHovered(true)
}

const handleMouseLeave = () => {
    setIsHovered(false)
}

    return (
        <div >
        <p className='text-4xl font-bold pt-10 mb-6'>Love</p>
                <div className="flex gap-8">
                    <div className="w-60 h-80 relative cursor-pointer" onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}>
                        <img className={`w-full h-full rounded-lg ${!isHovered ? '' : 'opacity-40 cursor-pointer pointer-events-none'}`}
                        src={love}
                        alt=""
                        />
                        {isHovered && (
                            <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-5">
                            <p className="font-bold text-lg opacity-90 text-white">Love</p>
                            <div className="flex items-end justify-center gap-5">
                                <img className="w-10 opacity-90" src={like} alt="" />
                                <img className="w-10 opacity-90" src={share} alt="" />
                            </div>
                            </div>
                        )}
                    </div>
                </div>
    </div>
    )
  }

export default LoveGifs