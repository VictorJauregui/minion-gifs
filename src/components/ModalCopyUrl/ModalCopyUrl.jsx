
import copyMinion from '../../assets/copyMinion.png'
import close from '../../assets/close.png'
import { toast } from 'react-hot-toast'

const ModalCopyUrl = ({setShowCopyModal, infoGif, }) => {

    const handleCloseModal = () => {
        setShowCopyModal(false)
    }

    const handleCopyText = () => {
      console.log("here")
      navigator.clipboard.writeText(infoGif.imageGif);
      setShowCopyModal(false)
      toast.success("The minion is in your power. SHARE IT")
    }

    return (
      <div>
          <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
            <div className="flex items-center justify-center min-h-screen ">
            <img className="hidden lg:flex lg:w-60 xl:w-60  2xl:w-72 ml-[-450px]  lg:mb-[240px] xl:mb-[240px] 2xl:mb-[268px] absolute" src={copyMinion} alt="" />
              <div className="flex flex-col justify-center bg-gradient-to-tl from-[#00A3FF] via-[#00A3FF] to-[#63BEF1] rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-2/5  items-center ">
                  <div className="w-full flex ">
                    <div className='flex  justify-center w-[98%]'>
                        <h2 className='text-2xl font-bold text-white mt-6 '>Copy <span className='text-6xl'>Minion</span></h2>
                    </div>
                    <div className=' w-[3%] flex justify-end m-2'>
                        <img className='w-[40px] h-5 lg:w-12 lg:h-7 cursor-pointer' src={close} alt="" onClick={()=>handleCloseModal()} />
                    </div>
                  </div>
                  <p className='w-[95%] mx-auto text-4xl font-bold text-white mt-10'> Copy Url</p>
                  <div className='w-[95%] lg:mb-10 gap-4 flex items-center'>
                    <input className="w-full lg:w-[75%] mt-4 mx-auto h-[2rem] lg:mr-5 text-[#00A3FF]" type="text" value={`http://127.0.0.1:5173/gif/${infoGif._id}`} />
                    <button className="hidden lg:block bg-[#63BEF1] border border-white text-white h-[2rem] mt-4  w-[20%] rounded" onClick={handleCopyText}>Copy</button>
                  </div>
                  <button className="lg:hidden  bg-[#63BEF1] border border-white text-white h-[2rem] my-4 w-[20%] rounded" onClick={handleCopyText}>Copy</button>
                  
              </div>
            </div>
          </div> 
      </div>
    )
  }

export default ModalCopyUrl