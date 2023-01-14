import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Encriptar from './pages/encriptar/encriptar'
import HomeParams from './pages/homeParams/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin' element={<Encriptar />}></Route>
        <Route path='/:encrypted' element={<HomeParams />}></Route>
      </Routes>
    </div>
  )
}

export default App
