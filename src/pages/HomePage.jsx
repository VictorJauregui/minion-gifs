
import LoveHome from '../components/LoveHome/LoveHome'
import Menu from '../components/Menu/Menu'
import Search from '../components/Search/Search'
import SmilingHome from '../components/SmilingHome/SmilingHome'
import plus from '../assets/plusWhite.png'
import ModalNewGif from '../components/ModalNewGif/ModalNewGif'
import { useState } from 'react'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
    const [modalShow, setModalShow] = useState(false)
  return (
    <div className='bg-black'>
        <div className='w-[80%] mx-auto h-[30vh] bg-black border-b'>
            <Menu />
            <div className='mt-16'>
                <h2 className='text-white w-5/6 mx-auto text-5xl font-bold  mb-0'>Welcome Víctor,</h2>
                <h2 className='text-white w-5/6 mx-auto text-5xl font-bold  mt-0'>Here you can find <span className='text-BlueMain'>Millions</span> of <span className='text-yellow-300 font-extrabold'>minions</span> in action</h2>
            </div>
            <Search />
        </div>
        <div className='bg-black'>
            <div className=' bg-black pt-10 w-4/6 mx-auto flex justify-end '>
                <div className='flex px-6 bg-BlueMain py-1 rounded items-center gap-5 cursor-pointer' onClick={()=>setModalShow(true)}>
                    <img className='w-5 h-5' src={plus} alt="" />
                    <p className='text-white font-bold text-xl' >New minion</p>
                </div>
                
            </div>

        </div>
        <div className='bg-black min-h-screen text-white'>
            <SmilingHome />
            <LoveHome />
        </div>
        <div className='w-[80%] mx-auto'>
            <Footer />

        </div>
        {
            modalShow &&
            <ModalNewGif setModalShow={setModalShow}/> 
        }
    </div>
  )
}

export default HomePage