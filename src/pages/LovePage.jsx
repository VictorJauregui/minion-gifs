import React, { useContext, useState } from 'react'
import Menu from '../components/Menu/Menu'
import Search from '../components/Search/Search'
import GiftContext from '../context/GiftsContext'

import GifsIndividualPage from '../components/GifsIndividualPage/GifsIndividualPage'
import Footer from '../components/Footer/Footer'
import { NavLink } from 'react-router-dom'

const LovePage = () => {
    const {dataGifs} = useContext(GiftContext)

    const LoveGifs = dataGifs.filter((love) => {
        return love.typeGif === "Love"
    })


  return (
    <div className='bg-black'>
        <div className='bg-black w-4/5 mx-auto'>
            <Menu />
            <Search />
            <div className='mb-20'>
                <h2 className='text-white font-bold text-4xl mt-10 mb-8'>Love <span className=''>Minions</span> </h2>
                <div className='grid grid-cols-5 gap-7 w-full' >
                {
                    LoveGifs.map((gif) => {
                        return (
                            <NavLink to={`/gif/${gif._id}`}>
                                <GifsIndividualPage gif={gif} />
                            </NavLink>
                        )                          
                    })
                }
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default LovePage