import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Location from './pages/Location'
import NotFound from './pages/NotFound'
import FloatingWhatsApp from './components/common/FloatingWhatsApp'; // Adjust path based on location


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="location" element={<Location />} />
        <Route path="FloatingWhatsApp" element={<FloatingWhatsApp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App