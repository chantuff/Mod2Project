import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import WeatherData from './pages/WeatherData'
import Nav from './components/Nav'

function App() {
 

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='weatherdata' element={<WeatherData/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    </>
  )
}

export default App
