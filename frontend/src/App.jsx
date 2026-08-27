import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Createnote from './Createnote'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Createnote />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App