import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about4.jpg";

const About = () => {
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });

  return (
    <>
      <div ref={missionRef} className={`bg-gray-50 mt-14 py-16 px-4 ${missionInView ? 'animate-fadeIn' : ''}`}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            About Our Company
          </h2>
        </div>

      
        <div ref={valuesRef} className={`container mx-auto space-y-12 ${valuesInView ? 'animate-fadeIn' : ''}`}>
        
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              className="w-full md:w-[40%]"
              ref={missionRef}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: missionInView ? 1 : 0, x: missionInView ? 0 : -100 }}
              transition={{ duration: 1 }}
            >
              <img
                src={about1}
                alt="Our Mission"
                className="rounded-lg shadow-md object-cover w-full h-auto"
              />
            </motion.div>
            <div className="w-full md:w-[50%] text-center items-start md:text-left">
              <h3 className="text-2xl font-geologica  font-bold text-gray-800">Our Mission</h3>
              <p className="text-gray-600 text-xl font-geologica mt-2">
                We are dedicated to delivering exceptional results for our clients. Our mission is to provide innovative strategies and solutions that elevate brands to new heights in the digital space.
                We are dedicated to delivering exceptional results for our clients. Our mission is to provide innovative strategies and solutions that elevate brands to new heights in the digital space.
                We are dedicated to delivering exceptional results for our clients. Our mission is to provide innovative strategies and solutions that elevate brands to new heights in the digital space.
                We are dedicated to delivering exceptional results for our clients. Our mission is to provide innovative strategies and solutions that elevate brands to new heights in the digital space.
              </p>
            </div>
          </div>

        
          <div className="flex flex-col md:flex-row-reverse  items-start gap-6">
            <motion.div
              className="w-full md:w-[40%]"
              ref={valuesRef}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: valuesInView ? 1 : 0, x: valuesInView ? 0 : 100 }}
              transition={{ duration: 1 }}
            >
              <img
                src={about2}
                alt="Our Values"
                className="rounded-lg shadow-md object-cover w-full "
              />
            </motion.div>
            <div className="w-full md:w-[50%] text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
              <p className="text-gray-600 font-geologica text-xl mt-2">
                Integrity, creativity, and excellence are at the core of everything we do. We believe in building lasting relationships and driving success for our clients through collaboration and transparency.
                Integrity, creativity, and excellence are at the core of everything we do. We believe in building lasting relationships and driving success for our clients through collaboration and transparency.
                Integrity, creativity, and excellence are at the core of everything we do. We believe in building lasting relationships and driving success for our clients through collaboration and transparency.
              </p>
            </div>
          </div>

          <div className="flex flex-col  md:flex-row items-center gap-6">
            <motion.div
              className="w-full md:w-[40%]"
              ref={visionRef}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: visionInView ? 1 : 0, x: visionInView ? 0 : -100 }}
              transition={{ duration: 1 }}
            >
              <img
                src={about3}
                alt="Our Vision"
                className="rounded-lg shadow-md object-cover w-full h-auto"
              />
            </motion.div>
            <div className="w-full md:w-[50%] text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              <p className="text-gray-600 text-xl font-geologica mt-2">
                To be a trusted partner for businesses worldwide, empowering them to thrive in the digital age through cutting-edge marketing and design solutions.
                Integrity, creativity, and excellence are at the core of everything we do. We believe in building  and driving success for our clients through collaboration and transparency.
                Integrity, creativity, and excellence are at the core of everything we do. We believe in building lasting relationships and driving success for our clients through collaboration and transparency.
                Integrity, creativity, and excellence are at the core of everything we do. We believe in building lasting relationships and driving success for our clients through collaboration and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
