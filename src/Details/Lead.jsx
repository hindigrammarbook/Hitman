import RelatedServices from '../components/RelatedServices';
import { Link } from 'react-router-dom';
import{ShoppingCart,Building2,Briefcase,Book,Globe,Plane} from 'lucide-react';

import { Helmet } from 'react-helmet-async';

const Lead = () => {
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
    <meta name="title" content="B2B Lead Generation Company in Delhi NCR | Hitman Digital Agency"/>
    <meta name="description" content="Boost your business with the top B2B lead generation company in Delhi NCR. Hitman Digital Marketing Agency offers tailored, affordable, and multi-channel strategies to generate high-quality leads. Enhance ROI, brand visibility, and sales opportunities. Contact us today!"/>
    <meta name="keywords" content="B2B lead generation company in Delhi NCR, lead generation services Delhi NCR, professional lead generation Delhi"/>
    </Helmet>
    <div className="min-h-screen font-times mt-10 relative bg-gray-50">
      {/* Hero Section */}
      <section className="relative  bg-LeadImage bg-cover bg-center   text-white py-16 px-4 md:px-8 lg:px-16 min-h-[500px]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className=" relative  my-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto  text-center">
            <h1 className="text-4xl  md:text-5xl font-time font-bold mb-6">B2B Lead Generation Company in Delhi NCR</h1>
            <p className="text-xl leading-loose mb-8">Transform your business growth with Hitman Digital Marketing Agency's proven lead generation strategies</p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Greetings from Hitman Digital Marketing Agency—a B2B lead Generation Company located in Delhi NCR. Our mission is to provide cost-effective and efficient lead generation solutions for businesses across the board, whether you are a B2B lead generation company inDelhi NCR or a small business operation seeking to grow your market base.
            </p>
          </div>
        </div>
      </section>

      {/* What is Lead Generation */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-times mb-6 text-blue-950">What is lead generation?</h2>
            <p className="text-gray-700 font-times text-lg leading-relaxed">
              Lead generation refers to the ability to find those potential consumers or businesses that may be willing to buy your product. Hitman Digital Marketing Agency uses some of the best strategies to ensure you target the right clientele.Both in large-scale marketing communication strategiesand in detailed communication and marketing initiatives, the result achieved is tangible.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Tailored Strategies",
                description: "Campaigns are designed based on your business specifics, ensuring every detail receives adequate importance."
              },
              {
                title: "Expert Team",
                description: "Our specialists have worked with various industries to deliver campaigns that suit each unique industry."
              },
              {
                title: "Affordable Pricing",
                description: "We offer affordable services that guarantee the highest return on investment possible."
              },
              {
                title: "Data-Driven Insights: ",
                description: "Using analytical tools, we are also in a position to control and managecampaigns for result-oriented execution"
              },
              {
                title: " Multi-Channel Approach",
                description: "Everything from email to social media and pay-per-click, we fullyutilize all forms to capture quality leads"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-slate-700">{feature.title}</h3>
                <p className="text-blue-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Our Lead Generation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Content Marketing",
                description: "Compelling blogs, infographics, and videos that entice your target audience and generate leads."
              },
              {
                title: "Email Marketing",
                description: "Tailored email marketing campaigns designed to reach prospects and guide them through the buying process."
              },
              {
                title: "Social Media Campaigns",
                description: "Effective use of LinkedIn, Facebook, and Instagram for engaging potential clients."
              },
              {
                title: " Landing Page Design",
                description: "They have optimized landing pages with impressive lead capture forms that are specific to yourkind of business."
              },
              {
                title: "Pay-Per-Click (PPC) Advertising",
                description: "Pay-Per-Click (PPC) Google Ads that capture visitors in the supermarket’s relevant market,exclusively serving high-intent consumers"
              }
            ].map((service, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold font-times mb-4 text-slate-700">{service.title}</h3>
                <p className="text-blue-900 font-times tetx-lg ">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">How We Work</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-8">
              {[
                {
                  step: 1,
                  title: "Understanding Your Goals",
                  description: "We estimate your goals and understand how your customers' needs will be met."
                },
                {
                  step: 2,
                  title: "Strategy Development",
                  description: "Our team develops a customized lead generation plan tailored to your needs."
                },
                {
                  step: 3,
                  title: "Execution",
                  description: "We execute your campaign using a multichannel approach for maximum impact."
                },
                {
                  step: 4,
                  title: "Monitoring and Optimization",
                  description: "Continuous monitoring and adjustment of campaigns to maximize effectiveness."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Generate More Leads?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our professionals steer your company to success and obtain effective leads for your enterprise.
          </p>
        <Link to="/contact"><button className="bg-white text-blue-900 px-8 py-3 font-times  rounded-lg font-semibold hover:bg-blue-50 transition">
            Contact Us Today
          </button></Link>  
        </div>
      </section>

    <RelatedServices currentService="lead" />
    </div>
    </>
  );
};

export default Lead