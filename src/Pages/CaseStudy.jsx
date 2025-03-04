import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import longImage1 from "../assets/MetaVerseScreen.webp";
import longImage2 from "../assets/MakeAnAppScreen.webp";

const ScrollingImage = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="overflow-hidden h-72 w-full relative rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      <motion.div
        className="absolute top-0 left-0 w-full"
        initial={{ y: 0 }}
        animate={{ 
        
          y: isHovered ? '-75%' : 0
        }}
        transition={{ 
          duration: 8,
          ease: "linear",
          type: "tween"
        }}
      >
        <img 
          src={src} 
          alt="Scrolling Screenshot" 
          className="w-full"
          
          style={{ maxWidth: '100%' }}
        />
      </motion.div>
    </div>
  );
};
const CaseStudy = () => {
 
  const caseStudies = [
    {
      client: "MetaVerse Of things",
      industry: "Technology & IOT Solution",
      description: "Increased organic traffic by 150% and improved local search rankings with a tailored SEO strategy.",
      scrollingImage: longImage1,
      results: [
        "200% increase in organic website traffic within 6 months.",
        "Secured top 3 rankings for competitive IoT-related keywords.",
      ],
    },
    {
      client: "MakeanApp",
      industry: "Mobile App Development",
      description: "Increase brand visibility and attract potential clients in the competitive app development industry.",
      scrollingImage: longImage2,
      results: [
        "Conducted a full SEO audit and implemented technical fixes to enhance site performance.",
        "Published guest posts on high-authority tech platforms to establish thought leadership",
      ],
    },
    {
      client: "MetaVerse Of things",
      industry: "Technology & IOT Solution",
      description: "Increased organic traffic by 150% and improved local search rankings with a tailored SEO strategy.",
      scrollingImage: longImage1,
      results: [
        "200% increase in organic website traffic within 6 months.",
        "Secured top 3 rankings for competitive IoT-related keywords.",
      ],
    },
    {
      client: "MakeanApp",
      industry: "Mobile App Development",
      description: "Increase brand visibility and attract potential clients in the competitive app development industry.",
      scrollingImage: longImage2,
      results: [
        "Conducted a full SEO audit and implemented technical fixes to enhance site performance.",
        "Published guest posts on high-authority tech platforms to establish thought leadership",
      ],
    },
    {
      client: "MetaVerse Of things",
      industry: "Technology & IOT Solution",
      description: "Increased organic traffic by 150% and improved local search rankings with a tailored SEO strategy.",
      scrollingImage: longImage1,
      results: [
        "200% increase in organic website traffic within 6 months.",
        "Secured top 3 rankings for competitive IoT-related keywords.",
      ],
    },
    {
      client: "MakeanApp",
      industry: "Mobile App Development",
      description: "Increase brand visibility and attract potential clients in the competitive app development industry.",
      scrollingImage: longImage2,
      results: [
        "Conducted a full SEO audit and implemented technical fixes to enhance site performance.",
        "Published guest posts on high-authority tech platforms to establish thought leadership",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="mt-10 min-h-screen p-8">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold font-times text-blue-950 mb-5">
            Case Studies
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Discover how we've partnered with clients to create success stories in
            digital marketing and development.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative bg-slate-900 rounded-xl overflow-hidden hover:border-2 hover:border-blue-900"
            >
              <div className="relative">
                {study.scrollingImage && (
                  <div className="mt-4">
                    <ScrollingImage src={study.scrollingImage} />
                  </div>
                )}
              </div>

              <div className="p-6 h-80">
                <h3 className="text-xl font-semibold text-white">{study.client}</h3>
                <p className="text-xs text-gray-400 italic mb-4">
                  {study.industry}
                </p>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <ul className="list-disc text-sm list-inside text-white">
                  {study.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-4 right-4">
                <button
                  className="px-2 py-2 bg-blue-800 text-white text-sm rounded-lg shadow-md hover:bg-blue-400 transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudy;