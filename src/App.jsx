import React from 'react'
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import CaseStudy from './Pages/CaseStudy'
import Contact   from './Pages/Contact'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/casestudy" element={<CaseStudy/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  
    <Footer/>
    </Router>
   
  )
}

export default App