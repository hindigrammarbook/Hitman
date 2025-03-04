import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Award, Target, LineChart, Settings, Globe } from 'lucide-react';
import{ShoppingCart,Building2,Briefcase,Book,Plane} from 'lucide-react';
import RelatedServices from '../components/RelatedServices';
const SEO = () => {
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
      <meta name="title" content="SEO Services in Delhi | Best SEO Company for Your Business Growth"/>
      <meta name="description" content="Boost your website's visibility with the best SEO services in Delhi by Hitman Digital Marketing Agency. Tailored strategies, proven expertise, and affordable solutions to improve search rankings, drive traffic, and increase ROI. Contact us today to transform your online presence!"/>
      <meta name="keywords" content="SEO services in Delhi, best SEO company Delhi, search engine optimization Delhi"/>
   
    </Helmet>
    <div className="min-h-screen  font-times relative mt-10  ">
    {/* Hero Section */}
    <section className="relative bg-seoImage bg-cover bg-center min-h-[500px] text-white py-16">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className=" container my-10 mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">SEO Services in Delhi</h1>
          <h2 className="text-2xl md:text-3xl mb-8">Transform Your Online Presence</h2>
          <p className="text-xl leading-relaxed mb-8">
            At Hitman Digital Marketing Agency, we offer the best SEO services in Delhi that will make your business shine. SEO is the golden ticket to increasing visitors, enhancing visibility, and improving sales in the day's world of digital marketing.
          </p>
          <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>

    {/* Introduction */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team of professionals works with different companies, including those that are in the startup stage as well as those that already have well-developed brands, making sure that through search engine optimization we give your business the prestige it deserves among other established businesses.
          </p>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">Why Should You Choose Us, SEO Company in Delhi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Target className="w-12 h-12 text-blue-950" />,
              title: "Tailored SEO Strategies",
              description: "It's impossible to approach each business the same way, and our SEO services are no different. Here, every client has his/her own unique program designed."
            },
            {
              icon: <Award className="w-12 h-12 text-blue-950" />,
              title: "Proven Expertise",
              description: "The SEO experts in Delhi office have a great deal of experience in working in a number of fields."
            },
            {
              icon: <Globe className="w-12 h-12 text-blue-950" />,
              title: "Transparent Process",
              description: "We always act with absolute clarity of operation. About keyword research, their entire performance, right from campaign to tracking, would be fully accessible to you."
            },
            {
              icon: <LineChart className="w-12 h-12 text-blue-950" />,
              title: "Cost-Effective Solutions",
              description: "We are the best SEO service provider in Delhi without reducing the quality of services we are offering."
            },
            {
              icon: <Settings className="w-12 h-12 text-blue-950" />,
              title: "Cutting-Edge Tools",
              description: "Using the best SEO optimizers, we work with your website to understand its current ranking and how we can make it grow continuously."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-blue-950">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Services */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">Comprehensive SEO Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "On-Page SEO",
              description: "Our services range from keyword optimization for web pages to meta tags and even general improvement of page content to suit the search engines."
            },
            {
              title: "Off-Page SEO",
              description: "The link-building techniques we use for our clients give your domain authority a boost and ensure you have higher search rankings."
            },
            {
              title: "Local SEO",
              description: "With emphasis on local customers, we enhance your ranking to target customers in your region or, better still, in Delhi to expand your business."
            },
            {
              title: "Technical SEO",
              description: "We fix problems, optimize websites, and improve the experience and speed to improve your rankings."
            },
            {
              title: "Content Marketing",
              description: "The most important element for creating traffic and conversions is high-quality and keyword-filled content."
            },
            {
              title: "E-Commerce SEO",
              description: "To achieve guaranteed high ranking for your products on the search engines, our team increases the sales on your online outlets."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-950">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How We Work */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">How We Work</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "1",
                title: "Goal Setting",
                description: "We begin with the identification of objectives and the key audience you aim at reaching."
              },
              {
                step: "2",
                title: "Strategy Development",
                description: "Depending on your objectives, our team develops a personal SEO strategy."
              },
              {
                step: "3",
                title: "Execution",
                description: "We apply on-site, off-site, and technical SEO to enhance your website."
              },
              {
                step: "4",
                title: "Monitoring and Optimization",
                description: "We monitor the impact and constantly analyze the numbers to optimize your campaign further."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-950 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-950">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Industries We Serve */}
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
    <section className="py-20 bg-gradient-to-r from-slate-600 to-slate-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Online Presence?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Start with SEO services in Delhi provided by Hitman Digital Marketing Agency. Your search for the best SEO company in Delhi ends here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
            Get Started Now
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-950 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
     
          <RelatedServices currentService="seo" />
  </div>
  </>
    
  )
}


export default SEO