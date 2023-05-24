
import copyMinion from '../../assets/copyMinion.png'
import close from '../../assets/close.png'

const ModalCopyUrl = ({setShowCopyModal}) => {

    const handleCloseModal = () => {
        setShowCopyModal(false)
    }

    return (
      <div>
          <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
            <div className="flex items-center justify-center min-h-screen ">
            <img className=" w-80 ml-[500px] mb-[300px] absolute" src={copyMinion} alt="" />
              <div className="flex flex-col justify-center bg-gradient-to-tl from-[#00A3FF] via-[#00A3FF] to-[#63BEF1] rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-2/5  items-center ">
                  <div className="w-full flex ">
                    <div className='flex  justify-center w-[98%]'>
                        <h2 className='text-2xl font-bold text-white mt-6 '>Copy <span className='text-6xl'>Minion</span></h2>
                    </div>
                    <div className=' w-[2%] flex justify-end m-2'>
                        <img className='w-12 h-7 cursor-pointer' src={close} alt="" onClick={()=>handleCloseModal()} />
                    </div>
                  </div>
                  <p className='w-[95%] mx-auto text-4xl font-bold text-white mt-10'> Copy Url</p>
                  <div className='w-[95%] mb-10 gap-4'>
                    <input className="w-[82%] mt-4 mx-auto h-[2rem] mr-5" type="text" />
                    <button className="bg-[#63BEF1] border border-white text-white py-1 w-[15%] rounded">Copy</button>
                  </div>
              </div>
            </div>
          </div> 
      </div>
    )
  }

export default ModalCopyUrl