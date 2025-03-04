import React from 'react';

import RelatedServices from '../components/RelatedServices';


import { Link } from 'react-router-dom';
import { 
  Users, 
  Target,  
  Layout, 
  BarChart, 
  PenTool,
  Building2,
  Music,
  Hotel,
  CheckCircle,
  Share2
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const SMM = () => {

  const services = [
    {
      title: "Content Creation and Management",
      content: "We publish organic and professional content within your targeted audience niches on Facebook, Instagram, LinkedIn, and Twitter.",
      icon: Layout
    },
    {
      title: "Paid Advertising Campaigns",
      content: "These targeted pay-per-ad promotions have high rates of return that will take your product to the next level.",
      icon: Target
    },
    {
      title: "Brand Strategy Development",
      content: "As your Social Media Strategists we help in the development of a conceptual framework that will help harmonize the brand in the identified social media platforms.",
      icon: Share2
    },
    {
      title: "Influencer Marketing",
      content: "In this case, gain approval from those stakeholders involved in the industry so that the message gets out and people begin to accept the message.",
      icon: Users
    },
    {
      title: "Social Media Analytics and Reporting",
      content: "Track the success of your campaigns using further metrics to optimize their effectiveness for advanced results.",
      icon: BarChart
    }
  ];

  const industries = [
    {
      name: "Interior Designing",
      description: "To attract clients and sell your services, showcasing the designs you want to offer is an important step.",
      icon: PenTool
    },
    {
      name: "Restaurants",
      description: "Gaining your audience and attracting more traffic to your business premises.",
      icon: Building2
    },
    {
      name: "Real Estate",
      description: "Business development and lead generation for property sales.",
      icon: Building2
    },
    {
      name: "Hotels",
      description: "Building up your reputation for your online business and or sales bookings.",
      icon: Hotel
    },
    {
      name: "Musicians",
      description: "Getting more followers and the marketing of your work.",
      icon: Music
    }
  ];

  const advantages = [
    "Affordable prices with equal quality standards of products.",
    "Effective and targeted solutions for increasing your visibility.",
    "An experienced social media marketing team with practical knowledge that has actually worked for others before.",
    "Collection of tools that will be useful for any business interested in increasing their sales."
  ];

  return (
    <>
   <Helmet>
    <meta name="robots" content="index, follow" />
    <meta name="title" content="Top Social Media Marketing Agency in Delhi NCR | Boost Your Online Presence"/>
    <meta name="description" content="Looking for a reliable social media marketing agency in Delhi NCR? Hitman Digital Marketing Agency offers tailored solutions, affordable services, and proven expertise in content creation, paid campaigns, brand strategy, and analytics. Contact us to grow your business today!"/>
    <meta name="keywords" content="social media marketing agency in Delhi NCR, best social media marketing agency for small business, Affordable Social media marketing agency in Delhi"/>
    </Helmet>
    <div className="min-h-screen mt-10 relative font-times bg-gray-50">    
    <section className="relative bg-smmImage  bg-cover bg-center   text-white py-16 px-4 md:px-8 lg:px-16 min-h-[500px]">
 
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className=" relative container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-14">
      A Social Media Marketing Agency in Delhi NCR
    </h1>
    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
      Social media has created an unshakable platform where businesses need to establish themselves and seek to sell their products or services to the consumers. We believe we are the best social media marketing agency in Delhi NCR, which provides unique ways to enhance your business in the current digital environment.
    </p>
  </div>
</section>

     
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Industry-Specific Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div> 
                  <h3 className="text-xl font-semibold text-blue-950">{industry.name}</h3>
                </div>
                <p className="text-gray-800">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-600">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Started Today!</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact Hitman Digital Marketing Agency, currently the premier social media marketing agency for small businesses, to talk about how you reach out to your target market with our uniquely tailored service.
          </p>
          <Link to="/contact"><button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Contact Us  
          </button></Link>
          
          <p className="mt-8 text-lg font-light italic">
            We should discuss developing the efficient social media strategy for you today!
          </p>
        </div>
      </section>


    <RelatedServices currentService="smm" />
    </div>
    </>
  );
};

export default SMM;
