import React from "react";
import { motion } from "framer-motion"; // For animations
import dm1 from "../assets/dm1.png"; // Your image import
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

const Services = () => {
  const services = [
    {
      category: "Digital Marketing",
      services: [
        { name: "SMM", image: dm, description: "Social media marketing to grow your brand." },
        { name: "SMO", image: dm2, description: "Boost your social media presence and engagement." },
        { name: "PPC", image: dm3, description: "Pay-per-click advertising to drive targeted traffic." },
        { name: "SEO", image: dm1, description: "Optimize your website to rank higher in search engine results." },
        { name: "Lead Generation", image: image3, description: "Attract and convert prospects into leads." },
        { name: "YouTube Marketing", image: dm1, description: "Promote your business on YouTube for greater reach." },
        { name: "Facebook Marketing", image: dm2, description: "Grow your audience with effective Facebook campaigns." },
      ],
    },
    {
      category: "Web Development",
      services: [
        { name: "Web Designing", image: web1, description: "Designing visually appealing and user-friendly websites." },
        { name: "Website Development", image: web2, description: "Creating fully functional and responsive websites." },
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
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Main Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of services to help your business grow and thrive in the digital world. Explore our offerings below.
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
                  >
                    
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

                   
                    <p className="text-gray-600 mt-4">{subService.description}</p>
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
