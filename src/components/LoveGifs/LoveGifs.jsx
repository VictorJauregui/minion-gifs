import { useContext, useState } from 'react'
import CardGif from '../SmilingHome/CardGif'
import GiftContext from '../../context/GiftsContext'
import { NavLink, useNavigate } from 'react-router-dom'

const LoveGifs = () => {
  const navigate = useNavigate();
    const {dataGifs} = useContext(GiftContext)
    
    const LoveGifs = dataGifs.filter((gif)=> {
      return gif.typeGif === "Love"
    })
  
    return (
      <div className=''>
        <p className='text-4xl font-bold pt-10 mb-6 flex'>Love</p>
        <div className='gif-container flex gap-3 overflow-x-scroll scrollbar-hide max-w-[100%] '>
          { 
            LoveGifs.map((gif) => (
              <div onClick={() => navigate(`./gif/${gif._id}`)}>
                <CardGif key={gif.id} gif={gif} />
              </div>
            ))
            
          }
  
        </div>
      </div>
    );
  }

export default LoveGifs