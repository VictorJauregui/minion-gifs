import { useContext, useState } from "react"
import minionLeft from "../../assets/minionLeft.png"
import minionRight from "../../assets/minionRight.png"
import GiftContext from "../../context/GiftsContext"


const ModalNewGif = ({setModalShow}) => {
    const {addGif, dataGifs} = useContext(GiftContext)
    console.log(dataGifs)

    // const [previewImg, setPreviewImg] = useState(null);
    const [gifData, setGifData] = useState({
        nameGif: "",
        imageGif:"",
        typeGif:"Smiling"
    })

    // const handlePreviewImg = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //         setPreviewImg(reader.result);
    //     };
    // }

    const handleChangeForm = (e) => {
        setGifData({...gifData, [e.target.name] : e.target.value}) 
    }

        const handleSubmit = (e) => {
            e.preventDefault()
            addGif(gifData)
            setModalShow(false)
        }

  return (
    <div>
        <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
          <div className="flex items-center justify-center min-h-screen ">
            <form className="flex flex-col justify-center bg-gradient-to-tl from-[#00A3FF] via-[#00A3FF] to-[#63BEF1] rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-1/2  items-center ">
                <h2 className='text-2xl font-bold text-white mt-6'>Update a <span className='text-6xl'>Minion</span></h2>
                <div className="flex w-full pl-0  justify-between">
                    <img src={minionLeft} alt="" />
                    <div className="mt-10">
                        <label >
                            <div className="relative bg-white/50 py-20 px-3 rounded cursor-pointer ">
                                <p className="flex justify-center text-2xl font-bold text-[#00A3FF] mb-2">Choose GIF</p>
                                <p className="text-white">Accepted formated JPG, PNG and Gift</p>
                            </div>
                            <input type="file" className='hidden'
                                    // onChange={handlePreviewImg}
                                    // name="imageGif"
                                    // value={gifData.imageGif}
                                />
                        </label>
                    </div>
                    <img src={minionRight} alt="" />
                </div>
                <div className="text-center text-white/50 w-full mt-5 mx-auto">
                    <p className="text-center text-[1.2rem]">Or if you prefer</p>
                </div>
                <div className="w-[95%]  flex flex-col justify-center mx-auto mt-5 bg-white/50 text-[#00A3FF] py-4 gap-y-3">
                    <p className="w-[95%] mx-auto text-4xl font-bold">Paste a URL</p>
                    <input className="w-[95%] mx-auto h-[2rem]" 
                    type="text" 
                    name="imageGif"
                    onChange={handleChangeForm}
                    value={gifData.imageGif}
                    />
                </div>
                <div className="flex w-[95%] mb-10 gap-8">
                    <div className="w-1/3">
                        <p className="text-2xl font-bold text-white mt-4 mb-2">Name your minion<span className="text-xl text-red-600">*</span></p>
                        <input className="border-b border-white/50 focus:border-blue-500 outline-none bg-transparent w-full" 
                        type="text"
                        name="nameGif"
                        onChange={handleChangeForm}
                        value={gifData.nameGif} 
                        />
                    </div>
                    <div className="w-1/3 mt-4">
                        <label className='text-2xl font-bold text-white '>Gif type<span className="text-xl text-red-600">*</span></label>
                                <select className='w-full h-[2rem] rounded text-BlueMain'
                                name="typeGif"
                                onChange={handleChangeForm}
                                >
                                    <option value="Smiling">Smiling</option>
                                    <option value="Love">Love</option>
                                    <option value="Crazy">Crazy</option>
                                </select>
                    </div>
                    <div className="flex justify-end w-1/3 items-end">
                        <div className="">
                            <button className="border border-white/50 text-white/50 px-4 py-1 rounded mr-4 hover:text-white hover:border hover:border-white" onClick={()=>setModalShow(false)}>Cancelar</button>
                            <button className="bg-[#63BEF1] border border-white text-white px-4 py-1 rounded hover:bg-green-600" onClick={handleSubmit}>Upload GIF</button>
                        </div>
                    </div>
                </div>
              
              
            </form>
          </div>
        </div> 
    </div>
  )
}

export default ModalNewGif