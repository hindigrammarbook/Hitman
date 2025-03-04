import React from 'react'
import{ShoppingCart,Building2,Briefcase,Book,Plane} from 'lucide-react'
import { Link } from 'react-router-dom' 
import { Helmet } from 'react-helmet-async';
import RelatedServices from '../components/RelatedServices';
import { Users, Target, BarChart2, Globe, MessageCircle, PieChart, Share2, LineChart } from 'lucide-react';

const SMO = () =>{
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
    <meta name="title" content="Top SMO Services in Delhi | Social Media Optimization Experts"/>
    <meta name="description" content="Boost your brand’s social media presence with expert SMO services in Delhi. At Hitman Digital Marketing Agency, we offer tailored strategies, content creation, community management, and cross-platform expertise to enhance engagement, increase traffic, and drive conversions. Contact us today!"/>
    <meta name="keywords" content="SMO services in Delhi, social media optimization, social media marketing
"/>
    </Helmet>
    <div className="min-h-screen mt-10 font-times  relative bg-gradient-to-r from-slate-600 to-slate-800 ">
    {/* Hero Section */}
    <section className="relative bg-smoImage bg-center bg-cover min-h-[500px]  text-white py-16">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container my-10 mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">SMO Services in Delhi</h1>
          <h2 className="text-2xl md:text-3xl mb-8">Improving Your Company's Social Media Strategy</h2>
          <p className="text-xl leading-relaxed mb-8">
            Nowadays, it is impossible to imagine brand promotion and customers' interactive communication without social networks. Here at Hitman Digital Marketing Agency, we focus on and deliver the best SMO services in Delhi for companies who wish to expand and improve their online connections to readers and customers.
          </p>
          <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>

    {/* What is SMO */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-950">What Are SMO Services?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Social Media Optimization, or SMO, is the process by which the organization can make its social media profiles and contents easier to be indexed on search engines, improve customer engagements, and broker more traffic. The following comprehensive social media optimization services will help your business remain relevant in the highly saturated market.
          </p>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">Why Our SMO Services are the Best in Delhi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Target className="w-12 h-12 text-blue-950" />,
              title: "Tailored Strategies",
              description: "It is important to understand that no two businesses are similar, and therefore no strategies differ either. Work with us, and we assure you we will deliver our strategic plans that address your various business objectives."
            },
            {
              icon: <Users className="w-12 h-12 text-blue-950" />,
              title: "Experienced Team",
              description: "At FarSight, we are an SMO agency in Delhi known for our excellent working knowledge of social media platforms such as Facebook, Instagram, Twitter, and LinkedIn."
            },
            {
              icon: <LineChart className="w-12 h-12 text-blue-950" />,
              title: "Affordable Solutions",
              description: "The SMO services offered by us in India are quite affordable, and our clients get maximum return on investment without any compromise on quality."
            },
            {
              icon: <Globe className="w-12 h-12 text-blue-950" />,
              title: "Cross-Platform Expertise",
              description: "We specialize in all the popular platforms, starting right from offering excellent Facebook services to even enhancing the Linked services."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-blue-950">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Services */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">Our Comprehensive SMO Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Share2 className="w-12 h-12 text-blue-950" />,
              title: "Profile Optimization",
              description: "They help to improve your social media accounts presence and make them correspond to your business."
            },
            {
              icon: <MessageCircle className="w-12 h-12 text-blue-950" />,
              title: "Content Creation and Scheduling",
              description: "Our team develops posts, infographics, and videos, preferring to target an audience and its interests."
            },
            {
              icon: <Users className="w-12 h-12 text-blue-950" />,
              title: "Community Management",
              description: "Create relevant conversations with your audience and respond promptly in order to create engagement."
            },
            {
              icon: <BarChart2 className="w-12 h-12 text-blue-950" />,
              title: "Paid Social Media Campaigns",
              description: "Analyze metrics and improve reach and conversions for your ads through campaigns on Facebook, Instagram, or LinkedIn."
            },
            {
              icon: <PieChart className="w-12 h-12 text-blue-950" />,
              title: "Analytics and Reporting",
              description: "Get relevant reports and real-time analysis of your social media campaign's achievements."
            }
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-blue-950">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="pb-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">Advantages of Our Social Media Optimization Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Enhanced Brand Awareness",
              description: "Increase the exposure of your business on top social networking sites."
            },
            {
              title: "Improved Engagement",
              description: "Engage your audience more deeply by developing better relationships with them."
            },
            {
              title: "Higher Website Traffic",
              description: "As a result, more people will be able to find you on the web through organic social media linking and posting."
            },
            {
              title: "Cost-Effective Marketing",
              description: "Utilize social networks as a versatile means of guaranteeing effective promotion at a minimum cost."
            },
            {
              title: "Better Conversion Rates",
              description: "Engage the followers into becoming customers with properly marked key strategies and creative content."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-950">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
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

    {/* How We Work */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">How We Work</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "1",
                title: "Understanding Your Goals",
                description: "The first step is, therefore, understanding your goals and the market or demographic you're likely to be serving."
              },
              {
                step: "2",
                title: "Strategy Development",
                description: "Here at Smitex, our team works on a strategy that will help you improve your social media accounts."
              },
              {
                step: "3",
                title: "Implementation",
                description: "We implement solutions on Facebook services and Instagram campaigns and the like."
              },
              {
                step: "4",
                title: "Performance Tracking",
                description: "The current trend of campaign monitoring helps your campaigns to be effective in delivering tangible outcomes."
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

    {/* CTA Section */}
    <section className="py-20  bg-gradient-to-r from-slate-600 to-slate-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Enhance Your Social Media Presence?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Looking for an SMO agency in Delhi or do you require overall social media solutions? Our team of professionals is here to assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
            Get Started Now
          </button>
          <Link to="/contact"><button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-950 transition">
            Contact Us
          </button></Link>
        </div>
        
      </div>
    </section> 
                  <RelatedServices currentService="smo" />
  </div>
  </>
  

  )
}

export default SMO