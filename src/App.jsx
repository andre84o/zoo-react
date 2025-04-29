import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Birds from './pages/Birds'
import Mammals from './pages/Mammals'
import Reptiles from './pages/Reptiles'
import Layout from './pages/Layout'


function App() {
  const [activeAnimal, setActiveAnimal] = useState(null);

  return (
    <>
    
    <Routes>
      <Route element={<Layout activeAnimal={activeAnimal} onAnimalClick={setActiveAnimal} />}>
      <Route path="/" element={<Home activeAnimal={activeAnimal} setActiveAnimal={setActiveAnimal} />} />
      <Route path="/mammals" element={<Mammals />}/>
      <Route path="/reptiles" element={<Reptiles />}/>
      <Route path="/birds" element={<Birds />}/>
      </Route>
      </Routes>
    </>
  )
}

export default App
