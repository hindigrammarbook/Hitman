import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
    <Helmet>
    <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div>
    
      <nav className="bg-gray-800 text-white py-2 px-4 shadow-md fixed w-full top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-10">
          
            <div className="text-xs sm:text-sm font-medium mb-2 sm:mb-0">
              <a href="mailto: info@hitmandigital.in"> Mail Us: info@hitmandigital.in</a>
              
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6 sm:items-center sm:justify-end w-full">
             
              <Link to="/seo-audit-tools" className="text-white text-sm font-medium mb-2 sm:mb-0">
                Free Digital Marketing Audit
              </Link>
              <a
                href="tel:+918585939854"
                className="text-white text-sm font-medium mb-2 sm:mb-0 sm:block hidden"
              >
                Call at +91 8585939854
              </a>

            </div>
          </div>
        </div>
      </nav>

  
      <nav
        className={`bg-white shadow-xl fixed w-full top-12 z-20 transition-transform ${
          isScrollingUp ? 'transform-none' : '-translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
       
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-10" />
              </Link>
            </div>

           
            <div className="hidden md:block">
              <ul className="flex text-sm font-geologica space-x-6">
                <Link to="/" className="text-gray-600 hover:text-blue-300 font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-blue-300 font-medium">
                  About
                </Link>
                <Link to="/services" className="text-gray-600 hover:text-blue-300 font-medium">
                  Services
                </Link>
                <Link to="/casestudy" className="text-gray-600 hover:text-blue-300 font-medium">
                  Case Study
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-blue-300 font-medium">
                  Contact Us
                </Link>
              </ul>
            </div>

           
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 rounded-md text-gray-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

     
        {isOpen && (
          <div className="md:hidden bg-gray-800 text-white flex flex-col justify-center items-center absolute top-16 left-0 w-full z-10">
            <ul className="space-y-4 py-4 w-full text-center">
              <li>
                <Link to="/" className="block text-white hover:text-blue-300 font-medium" onClick={() => setIsOpen(false)}>

                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block text-white hover:text-blue-300 font-medium"  onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="block text-white hover:text-blue-300 font-medium"  onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/casestudy" className="block text-white hover:text-blue-300 font-medium"  onClick={() => setIsOpen(false)}>
                  Case Study
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block text-white hover:text-blue-300 font-medium" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
    </>
  );
};

export default Navbar;
