import { React, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dm1 from "../assets/dm1.png";
import dm2 from "../assets/dm2.jpg";
import dm3 from "../assets/dm3.png";
import dm from "../assets/dm.webp";
import image3 from "../assets/image3.png";
import web1 from "../assets/web1.png";
import web2 from "../assets/Web development.webp";
import appImage from "../assets/appImage.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const services = [
    {
      services: [
        { name: "SMM", image: dm, description: "Social media marketing is the process of using social media platforms and websites to promote a product or service.", link: "/services/social-media-marketing-agency-in-delhi-ncr" },
        { name: "SMO", image: dm2, description: "Social media optimization is using social media to amplify the message of an organization.", link: "/services/smo-services-in-delhi" },
        { name: "Google Ads", image: dm3, description: "Google Ads is an online advertising model where the advertiser pays a publisher every time someone clicks on their ad.", link: "/services/google-ads-services-in-delhi" },
        { name: "SEO", image: dm1, description: "Search Engine Optimization (SEO) improves web page presence using digital marketing and makes content more accessible.", link: "/services/seo-services-in-delhi" },
        { name: "Lead Generation", image: image3, description: "A lead is a prospect who expresses interest in a company's products or services but isn't ready to buy yet.", link: "/services/b2b-lead-generation-company-in-delhi-ncr" },
        { name: "Web Designing", image: web1, description: "Web design is the process of planning and organizing the content of a website.", link: "/services/website-designing-services-in-delhi" },
        { name: "Website Development", image: web2, description: "A website is an online space where you can share information for others to view.", link: "/services/best-web-development-services-in-delhi" },
        { name: "App Development", image:appImage, description: "App development is the process of creating software applications for mobile devices and the web", link: "/services/best-app-development-services-in-delhi" },
      ],
    },
  ];


  return (
    <>
    <Helmet>
    <meta name="title" content="Digital Marketing Services in Delhi | Hitman Digital" />
  
    <meta name="robots" content="index, follow" />
    
         <meta name="description" content="Boost your business with expert digital marketing services in Delhi. We offer SEO, social media marketing, PPC, and web development to drive traffic and deliver real results"/>
         <meta name="keywords" content="Digital Marketing Services in Delhi"/>
       </Helmet>
    <div className="bg-blue-200 mt-10 rounded-t-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold font-times py-8 text-gray-800 heading">
        Top Digital Marketing Services in Delhi – Grow Your Business with Hitman Digital
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        At Hitman Digital Marketing Agency, where you will find professional digital marketing services in Delhi for your business. We offer SEO, social media marketing, paid ads, and many other services for your brand to help you attract the right customers. Using our highly qualified stuff, we develop clear and efficient navigation to enhance your establishment’s presence and popularity in the online environment. If you want your brand to get noticed and drive actual results online, join the ranks of Hitman Digital
        </p>
      </div>

      <div className="container x-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
        {services[0].services.map((subService, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white shadow-lg mt-10 mx-auto rounded-sm border-2 border-blue-950 overflow-hidden group transition transform hover:shadow-2xl hover:border-gray-500 w-full h-[400px]"
            data-aos="fade-up"
          >
            <Link to={subService.link} className="relative block w-full h-full">
              <div className="relative w-full h-full overflow-hidden">
                {/* Image */}
                <img
                  src={subService.image}
                  alt={subService.name}
                  className="w-full h-full object-cover"
                />
                {/* Hover Effect for Small Circle */}
                <div className="absolute bottom-0 right-0 w-32 h-20 bg-slate-700 bg-opacity-50 rounded-l-full flex items-center justify-center group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:left-0 group-hover:top-0 group-hover:bottom-0 group-hover:right-0 transition-all duration-500">
                  {/* Text inside the circle that expands */}
                  <p className="text-white text-lg font-times font-bold absolute group-hover:opacity-0 group-hover:text-xl transition-opacity duration-300 p-2 text-center">
                    {subService.name}
                  </p>

                  {/* Expanded content on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h2 className="text-lg font-times font-thin">{subService.name}</h2>
                    <p className="text-sm text-justify p-4 mt-2">{subService.description}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
