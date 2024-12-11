import React from "react";
import Slider from "react-slick";
import image1 from "../assets/Banner1.jpg";
import image2 from "../assets/Banner2.jpg";
import image3 from "../assets/Banner3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home1 from "../assets/Home1.jpg"
import Home2 from "../assets/Home2.jpg"
import Home3 from "../assets/Home3.jpg"
import { motion } from "framer-motion";
import client1 from "../assets/circle.png";
import client2 from "../assets/design.png";
import client3 from "../assets/botanical.png";
import client4 from "../assets/innova.png";
import client5 from "../assets/innovate.png";
import client6 from "../assets/system.png";
import boy from "../assets/boy.png";
import woman from "../assets/woman.png";
import man from "../assets/man.png";
import profile from "../assets/profile.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CountUp from 'react-countup';

const Home = () => {

  const stats = [
    { label: 'Clients', value: 250 },
    { label: 'Projects Completed', value: 800 },
    { label: 'Years of Experience', value: 10 },
    { label: 'Rating', value: 4.9 },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: image1,
      heading: "Welcome to Our Digital Marketing Agency",
      description:
        "Empowering businesses with innovative Digital Marketing, Web Development, and Website Design services.",
    },
    {
      id: 2,
      image: image2,
      heading: "Your Growth is Our Mission",
      description:
        "We specialize in delivering customized solutions to elevate your online presence.",
    },
    {
      id: 3,
      image: image3,
      heading: "Creative Strategies, Measurable Results",
      description:
        "Join us to transform your brand with our expert marketing and design services.",
    },
  ];

  return (
    <div>
      
      <div className="h-screen w-screen  bg-gray-100">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-screen w-screen">
              
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

            
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-40">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mt-4 max-w-3xl">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-col   md:flex-row items-center justify-between min-h-screen pl-8">
   
      <div className="flex-1 bg- md:pr-12">
        <motion.h1
          className="text-6xl font-bold text-gray-800 justify-start font-geologica mb-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          Hitman Digital Pvt Ltd
        </motion.h1>
        <motion.p
          className="text-xl text-sky-950 font-thin font-times mb-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          repellendus quidem accusantium ipsa nulla incidunt distinctio modi!
          Velit fugiat atque quam veniam cum at architecto, placeat in eveniet
          quidem excepturi!
        </motion.p>
        <motion.p
          className="text-xl text-gray-900 font-thin  font-times"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          repellendus quidem accusantium ipsa nulla incidunt distinctio modi!
          Velit fugiat atque quam veniam cum at architecto, placeat in eveniet
          quidem excepturi!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          repellendus quidem accusantium ipsa nulla incidunt distinctio modi!
          Velit fugiat atque quam veniam cum at architecto, placeat in eveniet
          quidem excepturi!
        </motion.p>
      </div>

  
      <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <img src={Home1} alt="Home1" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Home2} alt="Home2" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Home3} alt="Home3" className="w-full h-auto object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
    /</div>


    <div className="bg-gray-100 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Clients</h2>
      </div>

      <div className="relative overflow-hidden mt-10 mb-8">
        <div className="flex items-center justify-start space-x-8 animate-slide-left">
          <div className="flex space-x-8">
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client1} alt="Client 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client2} alt="Client 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client5} alt="Client 5" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client3} alt="Client 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client4} alt="Client 4" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client5} alt="Client 5" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client6} alt="Client 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client2} alt="Client 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client1} alt="Client 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client2} alt="Client 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client1} alt="Client 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client3} alt="Client 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client2} alt="Client 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client4} alt="Client 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client6} alt="Client 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client2} alt="Client 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client3} alt="Client 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-28 overflow-hidden border-2 border-gray-300 rounded-sm">
              <img src={client6} alt="Client 2" className="w-full h-full object-cover" />
            </div>
          
        </div>
      </div>
      </div>
      </div>
      
   <div className=" bg-slate-900 space-y-8">
    <div className="container pb-10  m-auto">
    <div className="text-center animate-fade-in">
    <h1 className="text-6xl font-bold mt-10 py-10 mb-10 text-white">Meet Our Team</h1>
    </div>
  <div className="grid grid-cols-2 pb-10  md:grid-cols-4 gap-8 animate-fade-up">
    <div className="flex flex-col px-10 justify-center items-center space-y-2">
      <img
        className="w-48 h-48   rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300" 
        src={boy}
        alt="director"
      />
      <h2 className="text-lg font-semibold  text-white">John Doe</h2>
      <p className="text-sm text-gray-500">Director</p>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <img
        className="w-48 h-w-48 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
        src={woman}
        alt="director"
      />
      <h2 className="text-lg font-semibold  text-white">Jane Smith</h2>
      <p className="text-sm text-gray-500">CEO</p>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <img
        className="w-48 h-w-48 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
        src={man}
        alt="director"
      />
      <h2 className="text-lg font-semibold  text-white">Michael Brown</h2>
      <p className="text-sm text-gray-500">CTO</p>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <img
        className="w-48 h-w-48 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
        src={profile}
        alt="director"
      />
      <h2 className="text-lg font-semibold  text-white">Sophia Lee</h2>
      <p className="text-sm text-gray-500">Designer</p>
    </div>
    <div className="flex flex-col items-center space-y-2">
    <img
        className="w-48 h-w-48 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
        src={man}
        alt="director"
      />
      <h2 className="text-lg font-semibold text-white">Michael Brown</h2>
      <p className="text-sm text-gray-500">CTO</p>
      </div>
    
    <div className="flex flex-col items-center space-y-2">
    <img
        className="w-48 h-w-48 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
        src={man}
        alt="director"
      />
      <h2 className="text-lg font-semibold text-white">Michael Brown</h2>
      <p className="text-sm text-gray-500">CTO</p>
      </div>
      </div>
    </div>
    
</div>

<h2 className=" mt-10 mb-10 flex justify-center text-4xl font-bold font-opensas">Numbers Speaks Alot</h2>
      <div className="flex flex-wrap items-center justify-center bg-gray-100 py-8">
        
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-screen md:w-1/4 py-4"
        >
          <div className="text-5xl gap-8 font-bold text-blue-500">
            <CountUp start={0} end={stat.value} duration={4} decimals={stat.label === 'Rating' ? 1 : 0} />
          </div>
          <p className="pl-10 text-3xl font-semibold text-gray-700">{stat.label}</p>
        </div>
      ))}
    </div>

</div>



  );
};

export default Home;
