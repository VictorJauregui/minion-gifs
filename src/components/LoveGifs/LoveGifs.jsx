import { useContext, useState } from 'react'
import CardGif from '../SmilingHome/CardGif'

import GiftContext from '../../context/GiftsContext'
import { NavLink } from 'react-router-dom'

const LoveGifs = () => {

    const {dataGifs} = useContext(GiftContext)
    
    const LoveGifs = dataGifs.filter((gif)=> {
      return gif.typeGif === "Love"
    })
    console.log(LoveGifs)
  
    return (
      <div className=''>
        <p className='text-4xl font-bold pt-10 mb-6 flex'>Love</p>
        <div className='flex gap-3 overflow-x-scroll scrollbar-hide max-w-[100%] '>
          { 
            LoveGifs.map((gif) => (
              <NavLink to={`./gif/${gif._id}`}>
                <CardGif key={gif.id} gif={gif} />
              </NavLink>
            ))
            
          }
  
        </div>
      </div>
    );
  }

export default LoveGifs