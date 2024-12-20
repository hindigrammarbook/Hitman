import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import DarkGlow from "./DarkGlow";

const Footer = () => {
  return (
    <DarkGlow>
    <footer className="bg-gray-900 dark-bg   font-geologica text-lg text-white py-6">
     {/* #EBFCFF */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
      
          <div>
            <h2 className="text-3xl font-bold text-blue-300 mb-4">Hitman Digital Pvt Ltd</h2>
            <p className="text-gray-400 mb-4">
            Hitman Digital Pvt Ltd, we specialize in transforming ideas into impactful digital experiences. Our expertise in web design and web development ensures that your online presence not only stands out but also drives engagement and results.
            </p>
            <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-500 transition duration-200">Website Designing</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition duration-200">Website Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition duration-200">Digital Marketing</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition duration-200">SEO</a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Useful Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to ='/' className="hover:text-blue-500 transition duration-200">Home</Link>
              </li>
              <li>
                <Link to ='/about' className="hover:text-blue-500 transition duration-200">About Us</Link>
              </li>
              
              <li>
                <Link to ='/contact' className="hover:text-blue-500 transition duration-200">Contact</Link>
              </li>
              <li>
                <Link to ='/services' className="hover:text-blue-500 transition duration-200">Services</Link>
              </li>
              <li>
                <Link to ='/casestudy' className="hover:text-blue-500 transition duration-200">Case Study</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="tel:+919811674268" className="hover:text-blue-500 transition duration-200">
                  +91-9811674268
                </a>
              </li>
              <li>
                <a href="tel:+919873184227" className="hover:text-blue-500 transition duration-200">
                  +91-9873184227
                </a>
              </li>
              <li>
                <a href="mailto:HitmanDM@mail.net" className="hover:text-blue-500 transition duration-200">
                HitmanDM@mail.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} <a href="https://in.linkedin.com/in/kalpanapatwal"> Hitman Digital Pvt Ltd</a> | All Rights Reserved</p>
        </div>
      </div>
    </footer>
    </DarkGlow>
  );
};

export default Footer;
