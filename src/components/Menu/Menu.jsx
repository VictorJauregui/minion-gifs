
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'
import {  useLocation } from "react-router-dom"

const Menu = () => {
    const location = useLocation();
  return (
    <>
        <div className='flex bg-black'>
            <NavLink to="/">
                <img className='cursor-pointer w-[50rem]' src={logo} alt="" />
            </NavLink>
            <div className='flex items-center w-[80%] gap-40 ml-40'>
                <NavLink className={location.pathname === "/smiling" ? 'text-yellow-300 text-3xl font-bold' : 'text-white text-2xl font-bold'} to="/smiling">Smiling</NavLink>
                <NavLink className={location.pathname === "/love" ? 'text-yellow-300 text-3xl font-bold' : 'text-white text-2xl font-bold'} to="/love">Love</NavLink>
                <NavLink className={location.pathname === "/party" ? 'text-yellow-300 text-3xl font-bold' : 'text-white text-2xl font-bold'} to="/party">Party</NavLink>
                <NavLink className={location.pathname === "/liked" ? 'text-yellow-300 text-3xl font-bold' : 'text-white text-2xl font-bold'} to="/liked">Liked</NavLink>
            </div>
            <div className='flex justify-end w-full mr-20 items-center '>
                <div className='flex gap-4 items-center px-4 py-1 rounded bg-black'>
                    <img className='w-14 h-14 rounded-full border-2 border-BlueMain' src={user} alt="" />
                    <p className='text-white font-bold'>Dominion</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default Menu