import logo from '../../assets/logo.png'
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import tiktok from "../../assets/tiktok.png"

const Footer = () => {
  return (
    <div className='border-t-2'>
        <div className='flex justify-center w-full'>
            <img className='w-60 my-10 lg:my-16' src={logo} alt="" />
        </div>
        <div className='flex sm:flex justify-between 2xl:mx-40 mx-6 pb-20'>
            <div className='md:block text-white hidden sm:block'>
                <p className='font-bold text-xl mb-4 '>Gifs types</p>
                <p>Smiling</p>
                <p>Love</p>
                <p>Party</p>
            </div>
            <div className='text-white mt-10 sm:mt-0'>
                <p className='font-bold text-xl mb-4'>Terms</p>
                <p>Cookies</p>
                <p>Terms and conditions</p>
            </div>

            <div className='text-white mt-10 sm:mt-0'>
                <p className='font-bold text-xl mb-4'>Contact</p>
                <p>minionsgifs@minionsgifs.com</p>
                <p>+34 6757865489</p>
            </div>
        </div>
        <div className='flex justify-end gap-2 pb-6'>
            <img className='w-10 h-10' src={instagram} alt="" />
            <img className='w-10 h-10' src={facebook} alt="" />
            <img className='w-10 h-10' src={tiktok} alt="" />

        </div>

    </div>
  )
}

export default Footer