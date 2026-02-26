import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product-services" element={<HomePage />} />
          <Route path="/how-it-works" element={<HomePage />} />
          <Route path="/our-work" element={<HomePage />} />
          <Route path="/active-calls" element={<HomePage />} />
          <Route path="/signin" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
