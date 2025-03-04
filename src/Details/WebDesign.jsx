import React from 'react';
import RelatedServices from '../components/RelatedServices';
import { Helmet } from 'react-helmet-async';

import { 
  Palette, 
  ShoppingCart, 
  DollarSign, 
  Search, 
  Clock, 
  Layout, 
  Globe, 
  Smartphone, 
  Settings,
  Building2,
  Briefcase,
  Book,
  Plane
} from 'lucide-react';


const WebDesign = () => {
  const whyChooseUs = [
    {
      title: "Customized Designs",
      content: "All companies are different, which means each needs website development, and we are able to offer an individual approach for any type of website—starting from the online shop and ending with the blog.",
      icon: Palette
    },
    {
      title: "Expertise in E-commerce Websites",
      content: "Being the leading e-commerce website designing services provider company in Delhi, we build uptime e-commerce sites that are easy to navigate and concisely aimed at high conversions.",
      icon: ShoppingCart
    }, 
    {
      title: "Affordable Services",
      content: "Our charges are reasonable as we provide quality services to make us the best website designing company for business in Delhi NCR.",
      icon: DollarSign
    },
    {
      title: "SEO-Optimized Websites",
      content: "All our sites are developed to be optimized for search engines and thus have better ranking and an increase in organic traffic.",
      icon: Search
    },
    {
      title: "Timely Delivery and Support",
      content: "You get your projects done on time, and you get support and maintenance from us for the enhanced optimized performance forever.",
      icon: Clock
    }
  ];

  const services = [
    {
      title: "Custom Website Design",
      content: "Developed to fit the needs of your particular business, we design visually appealing websites that properly engage your target audience as well as being easy to navigate.",
      icon: Layout
    },
    {
      title: "E-commerce Website Design",
      content: "We are one of the leading e-commerce website designing companies in Delhi, providing professional online stores that are user-friendly and easy to browse through.",
      icon: ShoppingCart
    },
    {
      title: "Blog Website Design",
      content: "A majority of our blog websites are located in Delhi, and their rightful aim is to not only extrapolate the viewer's interest and attention but to retain it also.",
      icon: Globe
    },
    {
      title: "Responsive Web Design",
      content: "The graphic website designs we develop are generic for both mobiles and others; therefore, our website looks better on all gadgets, such as computers, tablets, mobiles, etc.",
      icon: Smartphone
    },
    {
      title: "Content Management Systems (CMS)",
      content: "We offer you CMS-based websites where you can easily and independently update your content.",
      icon: Settings
    }
  ];

  const industries = [
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Real Estate", icon: Building2 },
    { name: "Healthcare", icon: Briefcase },
    { name: "Education", icon: Book },
    { name: "Blogging and Media", icon: Globe },
    { name: "Retail", icon: ShoppingCart },
    { name: "Travel & Hospitality", icon: Plane }
  ];

  return (
    <>  
    <Helmet>
    
    <meta name="robots" content="index, follow" />
    <meta name="title" content="Professional Website Designing Services in Delhi | Hitman Digital Agency"/>
    <meta name="keywords" content="Website designing services in Delhi, custom website design, SEO-optimized website design"/>
    <meta name="description" content="Looking for expert website designing services in Delhi? Hitman Digital Marketing Agency creates stunning, SEO-optimized, and user-friendly websites tailored to your business needs. Get affordable, responsive designs for e-commerce, blogs, and more. Contact us today!"/>
    </Helmet>
    <div className="min-h-screen text-center  font-times mt-10 relative bg-gray-50">
      {/* Hero Section */}
      <section className=" relative bg-webImage bg-cover bg-center min-h-[500px] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 opacity-50 bg-black"></div>
        <div className=" relative my-10 container mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Website Designing Services in Delhi</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            It is important that the website is well designed because a user will only get one first impression of the company. We at Hitman Digital Marketing Agency offer online Website designing services in Delhi with a known emphasis on gorgeous, efficient, and easy-to-navigate websites that justly represent a business.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 text-center">Why Should You Select Us for Website Designing?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 text-center">Our Website Designing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{service.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-sm">
                <industry.icon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Create Your Website Today!</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Do you need transformation of your internet market presence with a well-crafted website? Join hands with Hitman Digital Marketing Agency—a website designing services in Delhi NCR—and we will turn it into reality for you.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Get Started
          </button>
          <p className="mt-8 text-lg font-light italic">
            Let's create your ideal website to help propel your business to where it needs to go!
          </p>
        </div>
      </section>
      <RelatedServices currentService="web" />
      </div>
      </>
  );
};

export default WebDesign;