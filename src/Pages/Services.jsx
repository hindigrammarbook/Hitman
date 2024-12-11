import React from "react";
import { motion } from "framer-motion"; 
import dm1 from "../assets/dm1.png";
import dm2 from "../assets/dm2.jpg";
import dm3 from "../assets/dm3.png";
import dm from "../assets/dm.webp";
import image3 from "../assets/image3.png";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.jpg";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import { Link } from "react-router-dom";




const Services = () => {
  const services = [
    {
      
      services: [
        { name: "SMM", image: dm, description:"Search Engine Optimization (SEO) is actually a strategy that helps improve web page presence using digital marketing while making its content more accessible to the search engines. ", link:"/services/smm"},
        { name: "SMO", image: dm2, description: "Social media optimization is using social media to amplify the message of an organization and its online presence. ",link:"/services/smo" },
        { name: "PPC", image: dm3, description: "Pay-per-click (PPC) is an online advertising model where the advertiser pays a publisher every time someone clicks on their ad. ",link:"/services/ppc"  },
        { name: "SEO", image: dm1, description: "Search Engine Optimization (SEO) is actually a strategy that helps improve web page presence using digital marketing while making its content more accessible to the search engines." ,link:"/services/seo"},
        { name: "Lead Generation", image: image3,description:"A lead is a prospect who expresses interest in a company's products or services but isn't ready to buy yet. Normally, interest is expressed when contact information is exchanged. .",link:"/services/lead"},
        { name: "YouTube Marketing", image: dm1, description: "Promote your business on YouTube for greater reach." ,link:"/services/youtube"},
        { name: "Facebook Marketing", image: dm2, description: "Grow your audience with effective Facebook campaigns." },
    
        { name: "Web Designing", image: web1, description: "Web design is the process of planning and organizing the content of a website to ensure it is accessible and shareable online. " },
        { name: "Website Development", image: web2, description: "A website is an online space where you can share information for others to view. " },
        { name: "Mobile App Development", image: web3, description: "Building mobile apps for iOS and Android." },
        { name: "Desktop App", image: web4, description: "Developing desktop applications for various platforms." },
        { name: "Static Website", image: web5, description: "Simple, static websites for small businesses." },
        { name: "E-commerce Site", image: web6, description: "Building e-commerce websites with shopping cart functionality." },
      ],
    },
  ];

  return (
    <div className="bg-gray-50  mt-14 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mt-8 text-gray-800 mb-8">Unlock Your Business Potential with Expert Digital Marketing & Web Development</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        At Hitmen Digital Marketing Agency , we offer cutting-edge digital marketing strategies and innovative web development solutions to help businesses grow, connect with their audience, and succeed in the digital world. 
        </p>
      </div>

      <div className="container mx-auto mt-12 space-y-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center gap-8">
            <motion.div
              className="w-full text-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.category}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center">
                {service.services.map((subService, idx) => (
                  <motion.div
                    key={idx}
                    className="relative bg-white shadow-lg rounded-lg border-2 border-gray-200 overflow-hidden group transition transform hover:shadow-xl hover:border-gray-400 w-auto h-[400px] mx-auto"
                    style={{ width: '500px', height: '700px' }}
                  >
                     <Link to={subService.link}>
                    <div className="relative w-full h-56 overflow-hidden">
                      <img
                        src={subService.image}
                        alt={subService.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-50"
                      />
                   
                      <motion.h4
                        className="absolute bottom-0 left-0 w-full text-center text-white text-xl font-semibold bg-gray-800 bg-opacity-70 py-2 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"
                      >
                        {subService.name}
                      </motion.h4>
                    </div>
                    </Link>

                   
                    <p className="text-gray-600 text-justify px-10 text-2xl font-geologica  items-center  mt-10">{subService.description}</p>
                     <div className="mt-20">
                    <button className="border-2 border-slate-800 rounded-xl text-3xl  py-6 px-6 font-opensas font-bold text-white bg-gray-900">{subService.button} Read More</button>
                    </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Services;
