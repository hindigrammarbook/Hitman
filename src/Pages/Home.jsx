import React from "react";
import Slider from "react-slick";
import image1 from "../assets/Banner1.jpg";
import image2 from "../assets/Banner2.jpg";
import image3 from "../assets/Banner3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ad from "../assets/adwords.png";
import seo from "../assets/seo.png";
import pay from "../assets/Pay.png";
import rocket from "../assets/rocket.png";
import Dollar from "../assets/Dollar.png";
import Social from "../assets/Social.png";
import BJW from "../assets/BJW.png";
import client1 from "../assets/circle.png";
import client2 from "../assets/design.png";
import client3 from "../assets/botanical.png";
import client4 from "../assets/innova.png";
import client5 from "../assets/Innovate.png";
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
import DarkGlow from '../components/DarkGlow';

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
      
      <DarkGlow>
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
   
<div className="flex my-20  justify-between items-center mx-10">
      <div  className="  w-3/5 text-5xl  pr-10 font-bold">
      <h2 className="mb-10  text-7xl">The Digital Marketing Experts</h2>
      <p className="text-2xl font-opensas text-justify text-gray-600">
      At [Your Company Name], we specialize in crafting tailored solutions that help businesses thrive in the digital world. With expertise in SEO, social media, and innovative strategies, we are here to make your brand shine.</p>
      <p className="text-2xl font-opensas text-justify text-gray-600">
      From driving brand awareness to generating quality leads and fostering customer loyalty, our team of experts leverages cutting-edge tools, innovative strategies, and a data-driven approach to deliver exceptional outcomes. 
    </p>
      </div>
      <div className="relative w-2/5 flex justify-center group">
          
            <div className="absolute bg-blue-300 rounded-full bottom-0 h-[10%] w-[10%] -z-10 group-hover:h-[100%] group-hover:w-[70%] right-40 transition-all duration-500 ease-in-out border border-gray-500"></div>
            <div className="absolute bg-blue-900 rounded-full bottom-0 h-[10%] w-[10%] -z-10 group-hover:h-[90%] group-hover:w-[60%]  left-72 transition-all duration-500 ease-in-out border border-blue-950"></div>

      
            <div className="absolute bottom-56 left-10 flex flex-row gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:scale-100 transform scale-0">
             
            <img
                src={seo}
                alt="SEO"
                className="w-14 h-14 object-cover transition-all duration-500 ease-in-out transform group-hover:rotate-[360deg] group-hover"
              />
              <img
                src={pay}
                alt="Pay"
                className="w-14 h-14 object-cover transition-all duration-500 ease-in-out transform group-hover:rotate-[360deg] group-hover"
              />
              <img
                src={Dollar}
                alt="Dollar"
                className="w-14 h-14 object-cover transition-all duration-500 ease-in-out transform group-hover:rotate-[360deg] group-hover"
              />
              <img
                src={Social}
                alt="Social"
                className="w-14 h-14 object-cover transition-all duration-500 ease-in-out transform group-hover:rotate-[360deg] group-hover"
              />
            </div>

            <img src={BJW} className="w-full object-contain" alt="" />
          </div>
        </div>
    </div>


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
      
   <div className=" bg-slate-900  dark-bg space-y-8">
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
    </DarkGlow>

</div>



  );
};

export default Home;
