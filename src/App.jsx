import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import WeatherData from './pages/WeatherData'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css'
import'./Home.css'

function App() {
 

  return (
    <>
    <Nav />
    <Footer />
    {/* Routes */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='weatherdata' element={<WeatherData/>} />
        <Route path='about' element={<About/>} />
      </Routes>
      </>
    
   
  )
}

export default App
