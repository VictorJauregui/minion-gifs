
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'

const Menu = () => {
  return (
    <>
        <div className='flex bg-black'>
            <img className='cursor-pointer' src={logo} alt="" />
            <div className='flex items-center w-[50%] gap-40 ml-40'>
                <p className='text-white text-2xl font-bold'>Smiling</p>
                <p className='text-white text-2xl font-bold'>Party</p>
                <p className='text-white text-2xl font-bold'>Crazy</p>
            </div>
            <div className='flex justify-end w-full mr-20 items-center '>
                <div className='flex gap-4 items-center px-4 py-1 rounded bg-black'>
                    <img className='w-10 h-10 rounded-full border-2 border-BlueMain' src={user} alt="" />
                    <p className='text-white font-bold'>Víctor Jauregui</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default Menu