
import React, { useContext } from 'react'
import Menu from '../components/Menu/Menu'
import Search from '../components/Search/Search'
import GiftContext from '../context/GiftsContext'

import GifsIndividualPage from '../components/GifsIndividualPage/GifsIndividualPage'
import Footer from '../components/Footer/Footer'
import { NavLink } from 'react-router-dom'

const LikedPages = () => {
    const {dataGifs} = useContext(GiftContext)

    const myMinions = dataGifs.filter((my) => {
        return my.liked === true
    })


  return (
    <div className='bg-black'>
        <div className='bg-black w-4/5 mx-auto'>
            <Menu />
            <Search />
            <div className='mb-20'>
                <h2 className='text-white font-bold text-4xl mt-10 mb-8'>My <span className=''>Minions</span> </h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 w-full' >
                {
                    myMinions.map((gif) => {
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

export default LikedPages