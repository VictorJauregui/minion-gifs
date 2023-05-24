import GiftsProvider from "../context/GiftsProvider"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import GifPage from "../pages/GifPage"

const RoutesPath = () => {
  return (
    <GiftsProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/gif" element={<GifPage />}/>
            </Routes>
        </BrowserRouter>
    </GiftsProvider>
  )
}

export default RoutesPath