import React from 'react'
import { CheckCircle, Target, BarChart2, Users, Search, FileText } from 'lucide-react';
import RelatedServices from '../components/RelatedServices';
import { Helmet } from 'react-helmet-async';
const PPC = () => {
  return (
    <>
    <Helmet>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content= "google ads services in delhi, Best google ads service provider in delhi, best google ads agency in delhi" />
        <meta name="title" content="Best Google Ads Service Provider in Delhi | Hitman Digital"/>
        <meta name="description" content="At Hitman Digital, we offer the best Google Ads sevices in Delhi to help your business grow. From driving traffic to increasing sales, we deliver measurable success."/>
        </Helmet>
    <div className="min-h-screen  relative font-times  mt-10 from-gray-50 to-white">

      <section className=" bg-googleImage bg-cover bg-center relative min-h-[500px]  text-white py-16">
      
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className=" relative my-10 container mx-auto px-4 ">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Best Google Ads Service Provider in Delhi</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Transform your online presence with Delhi's premier Google Ads agency. Drive real, measurable results for your business.
            </p>
            <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              At our Hitman Digital Marketing Agency, we fully appreciate the need for your business to succeed in an era where there is massive competition online. That's why our Google Ads services are some of the finest in Delhi, designed to provide actual and quantifiable outcomes. Whether you need to drive more traffic, generate leads, or boost sales—we'll make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Search className="w-12 h-12 text-blue-600" />,
                title: "Targeted Keyword Research",
                description: "We don't just scratch the surface to get the basics, but we sift through to get the best match for your business."
              },
              {
                icon: <Target className="w-12 h-12 text-blue-600" />,
                title: "Customized Campaigns",
                description: "Our bespoke campaigns allow for the achievement of your objectives—be it website traffic, leads, or direct sales."
              },
              {
                icon: <FileText className="w-12 h-12 text-blue-600" />,
                title: "Eye-Catching Ad Copy",
                description: "The bedrock of great ads is great copy. Our team crafts compelling ads that drive clicks and conversions."
              },
              {
                icon: <BarChart2 className="w-12 h-12 text-blue-600" />,
                title: "Ongoing Optimization",
                description: "We constantly adjust your ads to optimize results and provide the highest possible ROI for your business."
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                title: "Transparent Reporting",
                description: "You'll never be left in the dark. We provide simple yet detailed reports on campaign effectiveness."
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: "Expert Support",
                description: "Our team of professional Google AdWords specialists is always here to help you succeed."
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

      {/* Why Google Ads */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Why Google Ads?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-8">
                Google Ads are one of the most effective ways to advertise online, and quite rightly so. It helps businesses:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Reach their audience instantly",
                  "Gain high-quality leads",
                  "Increase website traffic",
                  "Build brand recognition"
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
                  title: "We're Experienced",
                  description: "Our team comprises professional Google AdWords specialists with deep platform expertise."
                },
                {
                  title: "We're Results-Driven",
                  description: "We don't just buy ads; we provide solutions that have a real impact on your business."
                },
                {
                  title: "We're Approachable",
                  description: "We make it easy for you to understand and follow your campaign progress."
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join the ranks of successful businesses that trust Hitman Digital Marketing Agency for their Google Ads campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
       <RelatedServices currentService="ppc" />
    </div>
    </>
  );
};
export default PPC