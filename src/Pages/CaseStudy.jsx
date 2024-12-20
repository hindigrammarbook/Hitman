import React from "react";
import { motion } from "framer-motion"; // For animations
import case1 from "../assets/case1.png"
import case2 from "../assets/case2.jpg"

const caseStudies = [
  {
    title: "SEO Boost for Local Business",
    client: "ABC Cafe",
    industry: "Food & Beverage",
    description:
      "Increased organic traffic by 150% and improved local search rankings with a tailored SEO strategy.",
    image: case1, // Replace with your image path
    results: [
      "150% Increase in Traffic",
      "Top 3 Rankings for Target Keywords",
      "50% Boost in Online Bookings",
    ],
  },
  {
    title: "Social Media Magic",
    client: "XYZ Apparel",
    industry: "E-commerce",
    description:
      "Grew social media engagement by 200% and drove targeted traffic to the store.",
    image: case2, // Replace with your image path
    results: [
      "200% Increase in Engagement",
      "20k New Followers",
      "15% Conversion Rate from Campaigns",
    ],
  },
  {
    title: "E-commerce Revamp",
    client: "ShopEase",
    industry: "Retail",
    description:
      "Redesigned their e-commerce platform, resulting in a 3x increase in sales and improved user experience.",
    image: case1, 
    results: [
      "300% Increase in Sales",
      "Reduced Cart Abandonment by 30%",
      "Improved Loading Speed by 40%",
    ],
  },
  {
    title: "E-commerce Revamp",
    client: "ShopEase",
    industry: "Retail",
    description:
      "Redesigned their e-commerce platform, resulting in a 3x increase in sales and improved user experience.",
    image: case2, 
    results: [
      "300% Increase in Sales",
      "Reduced Cart Abandonment by 30%",
      "Improved Loading Speed by 40%",
    ],
  },
  {
    title: "E-commerce Revamp",
    client: "ShopEase",
    industry: "Retail",
    description:
      "Redesigned their e-commerce platform, resulting in a 3x increase in sales and improved user experience.",
    image: case1, 
    results: [
      "300% Increase in Sales",
      "Reduced Cart Abandonment by 30%",
      "Improved Loading Speed by 40%",
    ],
  },
  {
    title: "E-commerce Revamp",
    client: "ShopEase",
    industry: "Retail",
    description:
      "Redesigned their e-commerce platform, resulting in a 3x increase in sales and improved user experience.",
    image: case2, 
    results: [
      "300% Increase in Sales",
      "Reduced Cart Abandonment by 30%",
      "Improved Loading Speed by 40%",
    ],
  },
];

const CaseStudy = () => {
  return (
    <div className="bg-gradient-to-b mt-24 from-gray-900 via-gray-800 to-gray-900 min-h-screen p-8">
      
      <div className="container mx-auto text-center">
        <h1 className="text-7xl font-bold text-slate-200 mb-6">Case Studies</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Discover how we’ve partnered with clients to create success stories in
          digital marketing and development.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 shadow-md rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            
            <div className="relative">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover group-hover:opacity-50 transition duration-300"
              />
              <motion.div
                className="absolute inset-0 bg-blue-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-white text-xl font-bold text-center">
                  {study.title}
                </p>
              </motion.div>
            </div>

            
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">
                {study.title}
              </h3>
              <p className="text-sm text-gray-400 italic mb-4">
                {study.client} - {study.industry}
              </p>
              <p className="text-gray-300 mb-4">{study.description}</p>
              <ul className="list-disc list-inside text-white">
                {study.results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </div>

           
            <div className="absolute bottom-4 right-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <hr  className="bg-white mt-9 w-[10] h-[30]"/>
    </div>
  );
};

export default CaseStudy;
