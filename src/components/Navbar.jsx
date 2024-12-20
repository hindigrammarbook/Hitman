import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

 
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
     
      <nav className="bg-gray-800 text-white py-1 px-4 shadow-md fixed w-full top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-6">
            <div className="text-sm font-medium">Mail Us : info@hitmandigital.com</div>
            <div className="flex space-x-6">
              
             <Link to="/contact"><p className="hover:text-violet-500">Free Digital Marketing Audit</p></Link> 
            </div>
            <div className="flex space-x-6">
              
              <a href="#" className="hover:text-violet-500">Call at +91 8585939854</a>
            </div>
          </div>
        </div>
      </nav>

      
      <nav className={`bg-white  shadow-xl fixed w-full top-8 z-10 transition-transform ${isScrollingUp ? 'transform-none' : '-translate-y-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex-shrink-0">
              <Link to="/"><img  src={logo} alt="Logo" className="h-10" /></Link>
            </div>

            <div className="hidden md:block">
              <ul className="flex text-sm font-geologica space-x-8">
                <Link to="/" className="text-gray-600 hover:text-violet-600 cursor-pointer font-medium transition duration-200">
                  Home
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-violet-600 cursor-pointer font-medium transition duration-200">
                  About
                </Link>
                <Link to="/services" className="text-gray-600 hover:text-violet-600 cursor-pointer font-medium transition duration-200">
                 Services
                </Link>
                <Link to="/casestudy" className="text-gray-600 hover:text-violet-600 cursor-pointer font-medium transition duration-200">
                  Case Study
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-violet-600 cursor-pointer font-medium transition duration-200">
                 Contact Us
                </Link>
              </ul>
            </div>

           
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
