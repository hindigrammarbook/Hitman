import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import CaseStudy from './Pages/CaseStudy';
import Contact from './Pages/Contact';
import SMM from './Details/SMM';
import SEO from './Details/SEO';
import AppDevelopment from './Details/AppDevelopment'
import SMO from './Details/SMO';
import PPC from './Details/PPC';
import Lead from './Details/Lead';
import WebDesign from './Details/WebDesign';
import WebDevelopment from './Details/WebDevelopment';
import PageSpeedAudit from './components/PageSpeedAudit';
import AppPromo from './Pages/AppPromo';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">     
        <Navbar /> 
        <ScrollToTop />

        <main className="flex-grow mt-16 mb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/casestudy" element={<CaseStudy />} />
            <Route
              path="/services/social-media-marketing-agency-in-delhi-ncr"
              element={<SMM />}
            />
            <Route
              path="/services/b2b-lead-generation-company-in-delhi-ncr"
              element={<Lead />}
            />
            <Route
              path="/services/google-ads-services-in-delhi"
              element={<PPC />}
            />
            <Route path="/services/seo-services-in-delhi" element={<SEO />} />
            <Route path="/services/smo-services-in-delhi" element={<SMO />} />
            <Route
              path="/services/website-designing-services-in-delhi"
              element={<WebDesign />}
            />
            <Route
              path="/services/best-web-development-services-in-delhi"
              element={<WebDevelopment />}
            />
            <Route
              path="/services/best-app-development-services-in-delhi"
              element={<AppDevelopment />}
            />
            <Route 
            path ="/app-development"
            element={<AppPromo/>}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/seo-audit-tools" element={< PageSpeedAudit/>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </main>

      
        <Footer />
      </div>
    
    </Router>
  );
};

export default App;
