import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  )
}

export default App
