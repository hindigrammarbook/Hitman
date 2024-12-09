import React from 'react'
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import CaseStudy from './Pages/CaseStudy'
import Contact   from './Pages/Contact'
import SMM from './Details/SMM'
import SEO from './Details/SEO'
import SMO from './Details/SMO'
import PPC from './Details/PPC'
import Lead from './Details/Lead'
import YouTube from './Details/YouTube'


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
      <Route path="/services/smm" element={<SMM />} />
      <Route path="/service/lead"element={<Lead/>}/>
      <Route path="/service/ppc" element={<PPC/>} />
      <Route path="/service/seo" element={<SEO/>}/>
      <Route path="/service/smo" element={<SMO/>}/>
      <Route path="service/youtube" element={<YouTube/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  
    <Footer/>
    </Router>
   
  )
}

export default App