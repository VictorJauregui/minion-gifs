
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'
import {  useLocation } from "react-router-dom"

const Menu = () => {
    const location = useLocation();
  return (
    <>
        <div className='xl:flex bg-black'>
            <NavLink className="flex justify-center w-full xl:block" to="/">
                <img className='cursor-pointer w-[300px] lg:h-full lg:w-[300px] 2xl:w-[200px]' src={logo} alt="" />
            </NavLink>
            <div className='flex items-center w-full  justify-center xl:w-[70%] mt-10 xl:mt-0  gap-12 md:gap-20  lg:gap-20  xl:ml-10'>
                <NavLink className={location.pathname === "/smiling" ? 'text-yellow-300  xl:text-3xl font-bold' : 'text-white md:text-2xl font-bold'} to="/smiling">Smiling</NavLink>
                <NavLink className={location.pathname === "/love" ? 'text-yellow-300 md:text-2xl font-bold' : 'text-white md:text-2xl font-bold'} to="/love">Love</NavLink>
                <NavLink className={location.pathname === "/party" ? 'text-yellow-300 md:text-2xl font-bold' : 'text-white md:text-2xl font-bold'} to="/party">Party</NavLink>
                <NavLink className={location.pathname === "/liked" ? 'text-yellow-300 md:text-2xl font-bold' : 'text-white md:text-2xl font-bold'} to="/liked">Liked</NavLink>
            </div>
            <div className='flex justify-end w-full mr-20 items-center '>
                <div className='flex gap-4 items-center px-4 py-1 rounded bg-black'>
                    <img className='hidden xl:block w-10 h-10 xl:w-14 xl:h-14 rounded-full border-2 border-BlueMain' src={user} alt="" />
                    <p className='hidden xl:block text-white font-bold'>Dominion</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default Menu