import { useContext, Redirect, useState } from 'react'
import sadMinion from '../../assets/sadMinion.png'
import GiftContext from '../../context/GiftsContext'
import { toast } from 'react-hot-toast'

const ModalDeleteGif = ({ setShowDeleteModal, infoGif }) => {
  const { deleteGif } = useContext(GiftContext)
  const [redirect, setRedirect] = useState(false)

  const handleCloseModal = () => {
    setShowDeleteModal(false)
  }

  const handleSubmit = () => {
    deleteGif(infoGif._id)
      .then(() => {
        toast.success("Your minion has been deleted successfully")
        setRedirect(true)
      })
      .catch((error) => {
        toast.error("Failed to delete the minion")
        console.error(error)
      })

  }


    return (
      <div>
          <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
            <div className="flex items-center justify-center min-h-screen ">
            <img className=" w-40 ml-[500px] mb-[300px] absolute" src={sadMinion} alt="" />
              <div className="flex flex-col justify-center bg-gradient-to-tl from-[#00A3FF] via-[#00A3FF] to-[#63BEF1] rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-2/5  items-center ">
                  <div className=" flex">
                    <h2 className='text-2xl font-bold text-white mt-6'>Delete <span className='text-6xl'>Minion</span></h2>
                  </div>
                  <div className='flex justify-center w-full '>
                    <p className='text-2xl font-bold text-white mt-5'>Oooohh...! Are you sure that you want to delete this precious minion?</p>
                  </div>
                  <div className="flex justify-center w-full mt-8 mb-8">
                    <button className="border border-white/50 text-white/50 px-4 py-1 rounded mr-4 hover:text-white hover:border hover:border-white" onClick={()=>handleCloseModal()} >Cancelar</button>
                    <button className=" border border-white text-white px-4 py-1 rounded bg-red-500" onClick={handleSubmit}>Delete GIF</button>
                  </div>
                  {
                    redirect && <Redirect to="/" />
                  }
                  
              </div>
            </div>
          </div> 
      </div>
    )
  }

export default ModalDeleteGif