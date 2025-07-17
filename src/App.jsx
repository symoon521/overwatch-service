import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HeroDetailPage from './pages/HeroDetailPage'
import PixelBackground from './components/PixelBackground'
import './App.css'

function App() {
  return (
    <>
      <PixelBackground />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hero/:heroKey" element={<HeroDetailPage />} />
      </Routes>
    </>
  )
}

export default App
