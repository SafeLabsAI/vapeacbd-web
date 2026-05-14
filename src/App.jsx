import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AgeGate from './components/AgeGate.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Wholesale from './pages/Wholesale.jsx'
import LabResults from './pages/LabResults.jsx'
import About from './pages/About.jsx'

export default function App() {
  const [verified, setVerified] = useState(false)

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AgeGate onVerified={() => setVerified(true)} />
        {verified && (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0a0a0a' }}>
            <Nav />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/wholesale" element={<Wholesale />} />
                <Route path="/lab-results" element={<LabResults />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    </HelmetProvider>
  )
}
