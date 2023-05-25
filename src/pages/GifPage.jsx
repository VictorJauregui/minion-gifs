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
import { NavLink, useParams } from 'react-router-dom'


const GifPage = () => {
  const {id} = useParams()
  const {dataGifs, updateGif} = useContext(GiftContext)
  const [showEditModal, setEditShowModal] = useState(false)
  const [showCopyModal, setShowCopyModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [infoGif, setInfoGif] = useState(null);


  
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
    console.log(infoGif);
  }, [infoGif]);
  
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
    <div className='bg-black min-h-screen w-4/5 mx-auto'>
        <Menu />
        <Search />
        <div className='h-[60vh] flex  mt-10 w-4/6 mx-auto pl-24 '>
            <img className='h-full w-[40vw] rounded-xl ' src={infoGif?.imageGif} alt="" />
            <div className=''>
                <div className='flex text-white items-center font-bold gap-2 ml-6 cursor-pointer' onClick={handleChangeLike}>
                    <img className='w-10' src={ infoGif?.liked===true ? blueHeart : like} alt="" />
                    <p className="">Like</p>
                </div>
                <div className='flex text-white items-center font-bold gap-2 ml-6 mt-4 cursor-pointer' onClick={()=>handleShowCopyModal()}>
                    <img className='w-10' src={share} alt="" />
                    <p className=''>Share</p>
                </div>
                <div className='flex text-white items-center font-bold gap-2 ml-6 mt-4 cursor-pointer' onClick={()=>handleShowModal()}>
                    <img className='w-10' src={edit} alt="" />
                    <p className='' >Edit</p>
                </div>
                <div className='flex text-white items-center font-bold gap-2 ml-6 mt-4 cursor-pointer' onClick={()=>handleShowDeleteModal()}>
                    <img className='w-10' src={deleteGif} alt="" />
                    <p className=''>Delete</p>
                </div>
            </div>
        </div>
        <div className='border-b border-gray-600'>
          <p className='w-4/6 text-white mx-auto text-6xl font-bold mb-10 pl-24'>{infoGif?.nameGif}</p>
        </div>
        <div className='mt-10 text-white pb-20'>
          <p className='text-2xl font-bold mb-4'>More Minions</p>
          <div className='flex gap-3 overflow-x-scroll scrollbar-hide max-w-[100%]'>
            {
              dataGifs.map((gif) => {
                return(
                  <NavLink to={`/gif/${gif._id}`}>
                    <CardGif gif={gif}/>
                  </NavLink>
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