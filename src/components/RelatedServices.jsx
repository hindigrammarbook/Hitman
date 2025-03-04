import React from 'react';
import { Link } from 'react-router-dom';
import smoImage from '../assets/smo1.webp';
import smmImage from '../assets/smm1.webp';
import seoImage from '../assets/seo1.webp';
import googleImage from '../assets/google ads 1.webp';
import LeadImage from '../assets/Lead Generation 1.webp';
import webImage from '../assets/web designing 1.webp';
import webDevImage from '../assets/web Development 1.webp';
import appImage from '../assets/appImage.webp';
const RelatedServices = ({ currentService }) => {
  // All services data
  const services = [
    {
      id: 'smo',
      title: 'Social Media Optimization',
      description: 'Nowadays, it is impossible to imagine brand promotion and customers interactive communication without social networks',
      image: smoImage, 
      path: '/services/smo-services-in-delhi'
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      description: 'At Hitman Digital Marketing Agency, we offer the best SEO services in Delhi that will make your business shine.',
      image:seoImage, 
      path: '/services/seo-services-in-delhi'
    },
    {
      id: 'ppc',
      title: 'Google Ads',
      description: "Transform your online presence with Delhi's premier Google Ads agency. Drive real, measurable results for your business.",
      image: googleImage, 
      path: '/services/google-ads-services-in-delhi'
    },
    {
      id: 'web',
      title: 'Web Designing',
      description: 'It is important that the website is well designed because a user will only get one first impression of the company. ',
      image: webImage, 
      path: '/services/website-designing-services-in-delhi'
    },
    {
      id: 'lead',
      title: 'Lead Generation',
      description: 'Our mission is to provide cost-effective and efficient lead generation solutions for businesses across the board, .',
      image: LeadImage, 
      path: '/services/b2b-lead-generation-company-in-delhi-ncr'
    },
    {
      id: 'webDev',
      title: 'Web Development',
      description: '  Considering that the society is now developing technologically forward and almost everyone uses a computer or a smartphone,',
      image: webDevImage, 
      path: '/services/best-web-development-services-in-delhi'
    },
    {
      id: 'smm',
      title: 'A Social Media Marketing Agency in Delhi NCR',
      description: 'Social media has created an unshakable platform where businesses need to establish',
      image: smmImage, 
      path: '/services/social-media-marketing-agency-in-delhi-ncr'
    },
    {
      id:'app',
      title:'App Development',
      description:'App development is the process of creating software applications for mobile devices and the web',
      image:appImage,
      path:"/services/best-app-development-services-in-delhi"

    },
    
    
  ];

  
  const otherServices = services.filter(service => service.id !== currentService);

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">
          Explore Our Other Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherServices.map((service) => (
            <Link 
              key={service.id}
              to={service.path}
              className="group"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-950 mb-2 group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;