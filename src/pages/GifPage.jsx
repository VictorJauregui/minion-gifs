import Menu from '../components/Menu/Menu'
import Search from '../components/Search/Search'
import happy from '../assets/happy.gif'
import share from '../assets/share.png'
import like from '../assets/like.png'
import edit from '../assets/edit.png'
import deleteGif from '../assets/delete.png'
import CardGif from '../components/SmilingHome/CardGif'
import Footer from '../components/Footer/Footer'
import ModalUpdateGif from '../components/ModalUpdateGif/ModalUpdateGif'
import { useState } from 'react'
import ModalCopyUrl from '../components/ModalCopyUrl/ModalCopyUrl'
import ModalDeleteGif from '../components/ModalDeleteGif/ModalDeleteGif'

const GifPage = () => {
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


  return (
    <div className='bg-black'>
    <div className='bg-black min-h-screen w-4/5 mx-auto'>
        <Menu />
        <Search />
        <div className='h-[60vh] flex  mt-10 w-4/6 mx-auto '>
            <img className='h-full w-[40vw] rounded-xl ' src={happy} alt="" />
            <div className=''>
                <div className='flex text-white items-center font-bold gap-2 ml-6 cursor-pointer'>
                    <img className='w-10' src={like} alt="" />
                    <p className=''>Like</p>
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
          <p className='w-4/6 text-white mx-auto text-6xl font-bold mb-10'>Idiot</p>
        </div>
        <div className='mt-10 text-white pb-20'>
          <p className='text-2xl font-bold mb-4'>More Minions</p>
          <CardGif />
        </div>
        <Footer />
        {
          showEditModal &&
          <ModalUpdateGif setEditShowModal={setEditShowModal} />
        }
        {
          showCopyModal &&
          <ModalCopyUrl setShowCopyModal={setShowCopyModal} />

        }
        {
          showDeleteModal &&
          <ModalDeleteGif setShowDeleteModal={setShowDeleteModal} />
        }

    </div>
    </div>
  )
}

export default GifPage