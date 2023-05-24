
import happy from "../../assets/happy.gif"
import minionEdit from "../../assets/minion-edit.png"

const ModalUpdateGif = ({setEditShowModal}) => {

    const handleCloseModal = () => {
        setEditShowModal(false)
    }

    return (
      <div>
          <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
            <div className="flex items-center justify-center min-h-screen ">
            <img className=" w-60 ml-[500px] mb-[600px] absolute" src={minionEdit} alt="" />
              <div className="flex flex-col justify-center bg-gradient-to-tl from-[#00A3FF] via-[#00A3FF] to-[#63BEF1] rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-2/5  items-center ">
                  <div className=" flex">
                    <h2 className='text-2xl font-bold text-white mt-6'>Edit <span className='text-6xl'>Minion</span></h2>
                  </div>
                  <div className='w-full flex'>
                    <div className='w-[70%] relative flex justify-center items-center cursor-pointer '>
                        <img className='w-full h-[40vh] rounded-xl p-5 absolute opacity-60' src={happy} alt="" />
                        <p className="opacity-90 text-white text-2xl font-bold" >Change Gift</p>
                    </div>
                    <div className='w-[50%] p-5'>
                        <p className='text-2xl text-white'>GIF Minion name</p>
                        <input className='h-[2rem] border-b border-white/50 focus:border-blue-500 outline-none bg-transparent w-full text-white' 
                        type="text"
                         />
                        <div className='flex flex-col mt-4'>
                            <label className='text-2xl text-white'>Gif type</label>
                            <select className=' h-[2rem] rounded text-BlueMain'
                                name="gifType"
                                id="gifType"
                            >
                                <option value="Pop español">Smiling</option>
                                <option value="Urbano latino">Love</option>
                                <option value="Rock español">Crazy</option>
                                
                            </select>
                        </div>
                        <div className="flex justify-end items-end w-full mt-60">
                            <button className="border border-white/50 text-white/50 px-4 py-1 rounded mr-4" onClick={()=>handleCloseModal()} >Cancelar</button>
                            <button className="bg-[#63BEF1] border border-white text-white px-4 py-1 rounded">Upload GIF</button>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div> 
      </div>
    )
  }

export default ModalUpdateGif