import React from 'react'
import { Smartphone, Code, Rocket, Zap, CheckCircle, Server, Shield, Settings } from 'lucide-react';
import RelatedServices from '../components/RelatedServices';

import { Helmet } from 'react-helmet-async';

const AppDevelopment = () => {
  return (
    <>
    <Helmet>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="app development services in delhi, best app development company in delhi, mobile app development agency in delhi" />
        <meta name="title" content="Best App Development Company in Delhi | Hitman Digital"/>
        <meta name="description" content="At Hitman Digital, we deliver cutting-edge mobile app development services in Delhi. From concept to launch, we build apps that drive business growth and user engagement."/>
    </Helmet>
    <div className="min-h-screen relative font-times mt-10 from-gray-50 to-white">

      <section className="bg-appImage bg-cover bg-center relative min-h-[500px] text-white py-16">
      
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative my-10 container mx-auto px-4"> 
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Best App Development Company in Delhi</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Create powerful, scalable mobile applications tailored to your business needs with Delhi's premier app development team.
            </p>
            <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg">
              Start Your App Journey
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Hitman Digital, we understand that a successful mobile application can revolutionize your business in today's digital world. Our expert app development team in Delhi combines technical excellence with creative innovation to deliver applications that not only meet but exceed your expectations. From concept development to deployment and beyond, we're committed to creating apps that drive engagement, boost revenue, and strengthen your brand.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our App Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Smartphone className="w-12 h-12 text-blue-600" />,
                title: "iOS App Development",
                description: "Create sleek, high-performance applications for iPhone and iPad that leverage the full potential of Apple's ecosystem."
              },
              {
                icon: <Code className="w-12 h-12 text-blue-600" />,
                title: "Android App Development",
                description: "Build versatile, feature-rich apps that work flawlessly across the diverse Android device landscape."
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-600" />,
                title: "Cross-Platform Development",
                description: "Maximize your reach with apps that run seamlessly on multiple platforms, reducing development time and costs."
              },
              {
                icon: <Server className="w-12 h-12 text-blue-600" />,
                title: "Backend Development",
                description: "Create robust server-side solutions that power your app with scalable, secure, and efficient infrastructure."
              },
              {
                icon: <Settings className="w-12 h-12 text-blue-600" />,
                title: "App Maintenance & Support",
                description: "Keep your application running smoothly with regular updates, performance optimization, and technical support."
              },
              {
                icon: <Rocket className="w-12 h-12 text-blue-600" />,
                title: "App Store Optimization",
                description: "Increase visibility and downloads with strategic ASO techniques tailored to each marketplace."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mobile Apps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Why Invest in Mobile Apps?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-8">
                In today's mobile-first world, a strategic app investment can transform your business by:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Creating a direct marketing channel",
                  "Building brand recognition and loyalty",
                  "Improving customer engagement",
                  "Providing valuable consumer insights",
                  "Offering competitive advantage",
                  "Enabling personalized user experiences"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Hitman Digital?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Team",
                  description: "Our developers bring years of experience and deep technical knowledge to every project we undertake."
                },
                {
                  title: "Custom Solutions",
                  description: "We craft bespoke applications tailored specifically to your business objectives and user needs."
                },
                {
                  title: "Agile Methodology",
                  description: "Our development process ensures rapid delivery, adaptability, and continuous improvement."
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-gray-50">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Development Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Rocket className="w-12 h-12 text-blue-600 mx-auto" />,
                  title: "Discovery",
                  description: "We analyze your requirements, target audience, and business objectives to create a strategic roadmap."
                },
                {
                  icon: <Settings className="w-12 h-12 text-blue-600 mx-auto" />,
                  title: "Design & Planning",
                  description: "Our team creates detailed wireframes, mockups, and technical specifications for your approval."
                },
                {
                  icon: <Code className="w-12 h-12 text-blue-600 mx-auto" />,
                  title: "Development",
                  description: "We build your application using the latest technologies, following best practices and quality standards."
                },
                {
                  icon: <Shield className="w-12 h-12 text-blue-600 mx-auto" />,
                  title: "Testing & Launch",
                  description: "Rigorous quality assurance ensures your app is bug-free and ready for a successful launch."
                }
              ].map((step, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white shadow-md">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Bring Your App Idea to Life?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Partner with Hitman Digital to transform your vision into a powerful, market-ready mobile application that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      <RelatedServices currentService="app-development" />
    </div>
    </>
  );
};

export default AppDevelopment;