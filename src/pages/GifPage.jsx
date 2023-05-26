import Menu from '../components/Menu/Menu'
import Search from '../components/Search/Search'
import happy from '../assets/happy.gif'
import share from '../assets/share.png'
import like from '../assets/like.png'
import edit from '../assets/edit.png'
import blueHeart from '../assets/blueHeart.png'
import deleteGif from '../assets/delete.png'
import CardGif from '../components/SmilingHome/CardGif'
import Footer from '../components/Footer/Footer'
import ModalUpdateGif from '../components/ModalUpdateGif/ModalUpdateGif'
import { useContext, useEffect, useState } from 'react'
import ModalCopyUrl from '../components/ModalCopyUrl/ModalCopyUrl'
import ModalDeleteGif from '../components/ModalDeleteGif/ModalDeleteGif'
import GiftContext from '../context/GiftsContext'
import { NavLink, useNavigate, useParams } from 'react-router-dom'



const GifPage = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const {dataGifs, updateGif, infoGif, setInfoGif} = useContext(GiftContext)
  const [showEditModal, setEditShowModal] = useState(false)
  const [showCopyModal, setShowCopyModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)



  
  const handleShowModal = () => {
    setEditShowModal(true)
  }
  
  const handleShowCopyModal = () => {
    setShowCopyModal(true)
    
  }
  
  const handleShowDeleteModal = () => {
    setShowDeleteModal(true)
  }
  
  const handleChangeLike = () => {
    const updatedLiked = !infoGif.liked; 
    
    setInfoGif((prevInfoGif) => ({...prevInfoGif, liked: updatedLiked
}))
    updateGif(infoGif._id, { liked: updatedLiked });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/gifs/${id}`);
        const data = await res.json();
        setInfoGif(data.gif);
      } catch (error) {
        console.error(error);
      }
      
    }
    fetchData();
  }, [id]);

  

  return (
    <div className='bg-black'>
    <div className='bg-black min-h-screen w-[95%] md:w-4/5 mx-auto'>
        <Menu />
        <Search />
        <div className='h-[28vh] sm:h-[40vh] xl:h-[40vh] 2xl:h-[60vh] md:flex  mt-10 w-[95%] mx-auto md:w-4/6 md:pl-12 xl:pl-16'>
            <img className='h-full w-full sm:w-[90vw] lg:w-[40vw] 2xl:w-[40vw] rounded-xl ' src={infoGif?.imageGif} alt="" />
            <div className='flex justify-between md:block pt-6 md:pt-10 mb-10'>
                <div className='mt-4 md:mt-0 flex text-white items-center font-bold gap-2 md:ml-6 cursor-pointer' onClick={handleChangeLike}>
                    <img className='w-8 sm:w-10' src={ infoGif?.liked===true ? blueHeart : like} alt="" />
                    <p className="">Like</p>
                </div>
                <div className='flex text-white items-center font-bold gap-2 ml-6 mt-4 cursor-pointer' onClick={()=>handleShowCopyModal()}>
                    <img className='w-8 sm:w-10' src={share} alt="" />
                    <p className=''>Share</p>
                </div>
                <div className='flex text-white items-center font-bold gap-2 ml-6 mt-4 cursor-pointer' onClick={()=>handleShowModal()}>
                    <img className='w-8 sm:w-10' src={edit} alt="" />
                    <p className='' >Edit</p>
                </div>
                <div className='flex text-white items-center font-bold gap-2 ml-6 mt-4 cursor-pointer' onClick={()=>handleShowDeleteModal()}>
                    <img className='w-8 sm:w-10' src={deleteGif} alt="" />
                    <p className=' '>Delete</p>
                </div>
            </div>
        </div>
        <div className='md:border-b border-gray-600'>
          <p className='w-[95%] md:w-4/6  text-white text-xl  lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-10 mx-auto md:pl-12 xl:pl-16'>{infoGif?.nameGif}</p>
        </div>
        <div className='mt-10 text-white pb-20'>
          <p className='text-2xl font-bold mb-4 mt-32 md:mt-0'>More Minions</p>
          <div className='gif-container flex gap-3 overflow-x-scroll scrollbar-hide max-w-[100%]'>
            {
              dataGifs.map((gif) => {
                return(
                  <div onClick={() => navigate(`/gif/${gif._id}`)}>
                    <CardGif gif={gif}/>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer />
        {
          showEditModal &&
          <ModalUpdateGif setEditShowModal={setEditShowModal} infoGif={infoGif} setInfoGif={setInfoGif} />
        }
        {
          showCopyModal &&
          <ModalCopyUrl setShowCopyModal={setShowCopyModal} infoGif={infoGif} setInfoGif={setInfoGif} />

        }
        {
          showDeleteModal &&
          <ModalDeleteGif setShowDeleteModal={setShowDeleteModal} infoGif={infoGif} setInfoGif={setInfoGif}/>
        }

    </div>
    </div>
  )
}

export default GifPage