
import { useContext } from 'react'
import CardGif from '../SmilingHome/CardGif'
import GiftContext from '../../context/GiftsContext'
import { NavLink } from 'react-router-dom'


const SmilingGifts = () => {
  const {dataGifs} = useContext(GiftContext)
  
  const SmilingGifs = dataGifs.filter((gif)=> {
    return gif.typeGif === "Smiling"
  })
  console.log(SmilingGifs)

  return (
    <div className=''>
      <p className='text-4xl font-bold pt-10 mb-6 flex'>Smiling</p>
      <div className='flex gap-3 overflow-x-scroll scrollbar-hide max-w-[100%] '>
        { 
          SmilingGifs.map((gif) => (
            <NavLink to={`./gif/${gif._id}`}>
              <CardGif key={gif.id} gif={gif} />
            </NavLink>
          ))
          
        }

      </div>
    </div>
  );
}

export default SmilingGifts