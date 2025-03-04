import React from 'react'
import { Code, Users, Search, Scale, Settings, PenTool,
  Building2, ShoppingCart, Layout, Award, CheckCircle, Globe,Hotel,Music } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import RelatedServices from '../components/RelatedServices';
const WebDevelopment = () => {
  const whyChooseUs = [
    {
      title: "Customized Solutions",
      content: "We always remember that every business is different, and so are the web development services we offer. Thus, each project can be individually adjusted to your further needs in order to get the website of your dreams.",
      icon: Settings
    },
    {
      title: "Expert Team",
      content: "Our team has experienced developers who possess the knowledge about the current development tools and platforms to design premier websites.",
      icon: Users
    },
    {
      title: "Affordable Services",
      content: "As an affordable web development services, the consumer gets access to quality websites at affordable prices beyond their constraints.",
      icon: CheckCircle
    },
    {
      title: "SEO-Friendly Websites",
      content: "Each and every website that we design is completely search engine friendly so that our clients' sites can rank higher with more traffic.",
      icon: Search
    },
    {
      title: "Scalability and Support",
      content: "We also offer customizable services that will easily fit every business size—from small businesses to enterprises. We also offer relatively frequent updates as well as technical support so that you do not encounter issues with your website.",
      icon: Scale
    }
  ];

  const services = [
    {
      title: "Corporate and Enterprise Web Development",
      content: "Using the information from the book Developing enterprise web services an architect's guide, we build strong and scalable websites to support business operations.",
      icon: Code
    },
    {
      title: "Ecommerce Website Development",
      content: "We are a reputed ecommerce website development company in Delhi that creates ecommerce web solutions that can provide ease of shopping.",
      icon: ShoppingCart
    },
    {
      title: "WordPress Website Development",
      content: "When it comes to the best WordPress website development company in Delhi, we are ready to create fresh and functional WordPress websites for you.",
      icon: Globe
    },
    {
      title: "Custom Web Development",
      content: "We will develop unique solutions such as static websites, dynamic websites, and web applications in accordance with your goals.",
      icon: Code
    },
    {
      title: "Landing Page Design",
      content: "Receive amazing landing pages with increased conversion rates to boost user interactions and ultimate sales.",
      icon: Layout
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
    "Well–documented experience in producing superior outcomes",
    "A team of experienced professionals that have best interest in your success",
    "Award received in set design and pleasant and easy to navigate website",
    "Reliability as evidenced by no hidden charges"
  ];

  return (
    <>
    <Helmet>
    <meta name="robots" content="index, follow" />
    <meta name="title" content="Best Web Development Services in Delhi | Hitman Digital Agency" />
    <meta name="description"/>
    <meta name="keywords" content="best web development services in Delhi, custom web development, SEO-friendly websites"/>
    </Helmet>
    <div className="min-h-screen font-times  relative mt-10 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-webDevImage bg-cover bg-center relative min-h-[500px] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className='absolute inset-0 bg-black opacity-50'></div>
  <div className=" relative my-10 container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Delhi's Best Web Development Services</h1>
    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">

            Considering that the society is now developing technologically forward and almost everyone uses a computer or a smartphone, a business needs to have a functional, aesthetically pleasing, and easy-to-navigate webpage in order to survive in the market. Here at Hitman Digital Marketing Agency, we also offer the best web development services in Delhi for every type of business across every industry.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Why Choose Our Web Development Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <item.icon className="w-8 h-8 text-blue-950 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-950">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Our Web Development Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-950 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-950">{service.title}</h3>
                </div>
                <p className="text-gray-700">{service.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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

      {/* Why We're the Best Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Why We're the Best Website Development Company in Delhi NCR</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-blue-950 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{advantage}</p>
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
            Your website is an online platform that represents your business. Avail the services of the Best website development company in Delhi NCR and tip your choice audience to a perfect online portal.
          </p>
          <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get a Quote
          </button>
          <p className="mt-8 text-lg font-light italic">
            Pack your dreams into our bags with the best web development services in Delhi.
          </p>
        </div>
      </section>
     
     <RelatedServices currentService="webDev" />
    </div>
    </>
  )
}

export default WebDevelopment