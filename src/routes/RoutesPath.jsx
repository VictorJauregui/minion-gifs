import GiftsProvider from "../context/GiftsProvider"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import GifPage from "../pages/GifPage"
import SmilingPage from "../pages/SmilingPage"
import LovePage from "../pages/LovePage"
import PartyPage from "../pages/PartyPage"
import LikedPages from "../pages/LikedPages"

const RoutesPath = () => {
  return (
    <GiftsProvider>
        <BrowserRouter>
            <Routes>
            <Route path='*' element={<Navigate to={'/'}/>} />
                <Route path="/" element={<HomePage/>}/>
                <Route path="/gif/:id" element={<GifPage />}/>
                <Route path="/smiling" element={<SmilingPage />}/>
                <Route path="/love" element={<LovePage />}/>
                <Route path="/party" element={<PartyPage />}/>
                <Route path="/liked" element={<LikedPages />}/>
            </Routes>
        </BrowserRouter>
    </GiftsProvider>
  )
}

export default RoutesPath