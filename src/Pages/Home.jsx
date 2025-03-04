import {React ,useEffect,useState,useRef} from "react";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seo2 from "../assets/search engine optimization.webp";
import network from "../assets/smm.webp";
import webDesign from "../assets/webDesign.png";
import strategy from "../assets/strategy.webp";

import { Link } from "react-router-dom";
import PPC from "../assets/PPC.png";

import SMM from "../assets/SMM.png";

import service1 from "../assets/social media marketing services.webp";
import service2 from "../assets/digital marketing services.webp";

import web from "../assets/browser.webp";
import group from "../assets/group.webp";
import innovation from "../assets/innovation.png";
import star from "../assets/Revenue.webp";
import business from "../assets/business.png"
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import AOS from "aos";
import poster from "../assets/Hitman digital marketing agency.webp";
import profession from "../assets/social media optimization.webp";
import laptop from "../assets/pay per click.webp";
import { Helmet } from 'react-helmet-async';
import "aos/dist/aos.css";


const Home = () => {

  const [startCounter, setStartCounter] = useState(false);
  const sectionRef = useRef(null);
  const counters = [
    { value: 100, label: "Increased Revenue",image:star },
    { value: 12000, label: "Optimized Process",image:web },
    { value: 24, label: "Expanded Market",image:group },
    { value: 84, label: "Efficiency",image:innovation },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounter(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
      AOS.init({ duration:1000, once: true });
    }, []);

  return (
    <>
    <Helmet>
    <meta name="title" content="Hitman Digital | Best Digital Marketing Agency in Delhi" />
    <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="With a focus on innovation skills, Hitman Digital Marketing Agency in Delhi offers the best creative digital marketing services for startups"
        />
       <meta name="keywords" content="Hitman Digital Marketing Agency, Digital Marketing Agency, Digital Marketing Agency in Delhi, Best Digital Marketing Agency in Delhi" />
        <link rel="canonical" href="https://hitmandigital.in" />
        <meta property="og:title" content="Hitman Digital | Best Digital Marketing Agency in Delhi" />
        <meta property="og:description" content="With a focus on innovation skills, Hitman Digital Marketing Agency in Delhi offers the best creative digital marketing services for startups" />
        <meta property="og:url" content="https://hitmandigital.in" />
        <meta property="og:type" content="website" />
      </Helmet>
    <div>
   <div className="h-[100vh] flex flex-col md:flex-row  relative">
  
  <div
    className="flex flex-col w-full md:w-[40%] pt-20 justify-start items-start px-6 md:px-10 order-2 md:order-1 absolute md:relative top-0 left-0 z-10"
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
  >
    
    <div className="text-center md:text-left bg-white/70 md:bg-transparent p-4 rounded-lg md:rounded-none">
      <main>
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-blue-950 font-times font-bold">
        Hitman Digital Marketing Agency
      </h1>
    
      <p className="mt-8 text-lg sm:text-xl md:text-2xl text-justify font-times text-slate-900">
        Best Creative Digital Marketing Services For Startups that are tailored to fit your unique goals and challenges.
      </p>
      </main>
     
      <div className="flex flex-col md:flex-row mt-10 gap-5 justify-center md:justify-start">
        <Link to="/services">
          <button className="text-md font-bold font-opensans border-2 border-blue-950 bg-blue-950 text-white rounded-full p-4 transition-all">
            Check Service
          </button>
        </Link>
        <Link to="/contact">
          <button className="text-md font-bold font-opensans border-2 border-blue-950 text-blue-950 rounded-full p-4 transition-all">
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-[60%] h-full right-0 order-1 md:order-2 relative">
    <img
      src={poster}
      alt="Hitman digital marketing agency"
      className="w-full h-full object-cover md:object-cover md:relative blur-sm md:blur-0"
      data-aos="fade-left"
      loading="lazy"
      
    />
    <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>
  </div>
</div>

<div className="h-auto mt-10 flex flex-col md:flex-row">
  {/* Left Section */}
  <div className="flex w-full md:w-[40%] flex-col gap-5 md:gap-10 justify-center items-center bg-gray-700 px-6 py-10 md:px-10">
    <h2
      className="text-4xl sm:text-5xl md:text-6xl text-white leading-normal font-bold font-times"
      data-aos="fade-right"
    >
      Hitman Digital Marketing Agency -
    </h2>
    <p
      className="text-lg sm:text-xl md:text-2xl text-white font-bold font-times text-center"
      data-aos="fade-left"
    >
      Your affordable digital marketing agency in Delhi!
    </p>
  </div>

  {/* Right Section */}
  <div className="bg-gray-300 flex flex-col gap-4 w-full md:w-[60%] px-6 py-10 md:px-10 text-justify">
    <p className="text-xl sm:lg md:text-lg text-blue-950 font-times">
      Would you like to have the services of an effective digital marketing agency? Does your business need a solution that is result oriented and specifically tailored to the needs of <a  className="text-gray-600 font-bold hover:text-blue-700" href="https://hitmandigital.in">Hitman Digital Marketing Agency</a> in Delhi? Being one of the cheap companies in digital marketing, we help you accomplish your online goals while making a small dent in your budget.
    </p>
    <p className="text-lg sm:text-base md:text-lg text-blue-950 font-times">
      From visibility of your business to traffic and conversion rates, we develop some of the best strategies involving today’s best brains and give you that unbeatable edge. From the small businessman and growing company, our services have been created to help you get success now in this highly competitive environment.
    </p>
    <p className="text-lg sm:text-base md:text-lg text-blue-950 font-times">
      Your future is well made at The Hitman Digital Marketing Agency - the best digital marketing company in Delhi - partner for the best. Now, incorporate some help from a business towards development, and let one online step to become with stride.
    </p>
    <p className="text-lg sm:text-base md:text-lg text-blue-950 font-times">
      Call us now and be part of the wagon in changing your online world today!
    </p>
    <div className="flex justify-center items-center mt-6 md:mt-10 gap-5">
      <Link to="/contact">
        <button
          className="text-sm sm:text-md font-bold font-opensas border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-6 py-3 transition-all"
          data-aos="fade-up"
        >
          Contact Now
        </button>
      </Link>
    </div>
  </div>
</div>

<div className="h-auto flex flex-col md:flex-row w-full mb-5 mt-16 justify-start items-start">
  {/* Left Section */}
  <div className="flex flex-col w-full md:w-2/5 px-5 md:px-10 gap-5 mb-10 md:mb-0">
    <p className="text-lg sm:text-2xl md:text-3xl font-times text-gray-700">
      Our Expertise in Digital Marketing
    </p>
    <h2 className="text-3xl leading-normal sm:text-4xl md:text-5xl font-times font-bold text-blue-950">
      Digital Marketing Services
    </h2>
    
    <p className="text-xl font-times text-justify text-gray-700">With a focus on innovation skills, Hitman Digital Marketing Agency from Delhi offers the best creative digital marketing services for startups.We provide service ranging from Search Engine Optimization for increased organic search, Social Media Optimization for better social presence, Social Media Marketing targeted for paid presence, Pay per click for quick boost, and web designing for a better user interface. Our approach is to assist your organization in achieving its objectives and flourishing in the digital world by offering high-impact online marketing solutions.</p>

    {/* Service Icons */}
    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 mt-1 ">
      <div
        className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-gray-800 rounded-full"
        data-aos="zoom-in"
      >
        <img src={seo2} className="h-full w-full rounded-full"  loading="lazy" alt="seo" />
      </div>
      <div
        className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-gray-800 rounded-full"
        data-aos="zoom-in"
      >
        <img src={network} className="h-full w-full rounded-full" loading="lazy" alt="Network" />
      </div>
      <div
        className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-gray-800 rounded-full"
        data-aos="zoom-in"
      >
        <img src={strategy} className="h-full w-full rounded-full" alt="strategy" />
      </div>
      <div
        className="h-12 w-12 sm:h-16 sm:w-16 border-2  border-gray-800 rounded-full"
        data-aos="zoom-in"
        loading="lazy"
      >
        <img
          src={webDesign}
          className="h-full w-full rounded-full"
          alt="Web Design"
          loading="lazy"
        />
      </div>
    </div>

  
    
  </div>
  
  <div className="flex w-full gap-2 md:w-3/5 ">
    <div
      className="grid grid-cols-1 sm:grid-cols-2  h-auto w-full gap-2"
      data-aos="zoom-in-up"
    >
      <img className="w-full object-cover rounded-md" src={service1} loading="lazy" alt="social media marketing services" />
      <img className="w-full object-cover rounded-md" src={service2} loading="lazy" alt="digital marketing services" />
    </div>
  </div>
</div>


<div className="h-auto py-2s sm:py-12 ">
  <h2 className="text-center mb-10 sm:mb-20 text-4xl sm:text-5xl md:text-6xl font-times text-gray-700 font-bold">
    Services We Offer
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 sm:gap-6 mx-5 sm:mx-10">
    <div className="bg-gray-700 border-2">
      <img src={business} loading="lazy" className="h-40 sm:h-60 md:h-full w-full object-cover" alt="Business" />
    </div>
    <div className="bg-white border-2 flex flex-col pt-4 justify-start items-center">
      <img src={seo2} loading="lazy" className="h-8 w-8 sm:h-10 sm:w-10" alt="seo" />
      <h2 className="text-gray-700 font-times pt-2 font-bold text-base sm:text-lg">SEO</h2>
      <p className="text-gray-700 font-times py-4 px-4 text-justify text-sm sm:text-base">
      SEO is the best way to increase the visibility and ranking of your website in search engines. It follows keyword optimization, on-page improvement, and link building to ramp up the amount of organic traffic to your page. Its strategies ensure that the right audience is captured for your business, thereby boosting online visibility and conversions.

      </p>
    </div>
    <div className="bg-gray-700 border-2">
      <img src={laptop} loading="lazy" className="h-40 sm:h-60 md:h-full w-full object-cover" alt="pay per click" />
    </div>
    <div className="bg-white border-2 flex flex-col pt-4 justify-start items-center">
      <img src={PPC} loading="lazy" className="h-8 w-8 sm:h-10 sm:w-10" alt="PPC Icon" />
      <h2 className="text-gray-700 font-times pt-2 font-bold text-base sm:text-lg">PPC</h2>
      <p className="text-gray-700 font-times py-4 px-4 text-justify text-sm sm:text-base">
      PPC is a very effective approach to generating immediate traffic and results. We work on your customized ad campaigns on Google Ads and social media to target your required visitors to your website. We optimize keywords and budgets to ensure the best ROI so you can more quickly reach your business objectives.
      </p>
    </div>
    <div className="bg-gray-700 border-2">
      <img src={profession} loading="lazy" className="h-40 sm:h-60 md:h-full w-full object-cover" alt="Profession" />
    </div>
    <div className="bg-white border-2 flex flex-col pt-4 justify-start items-center">
      <img src={SMM} loading="lazy" className="h-8 w-8 sm:h-10 sm:w-10" alt="SMM Icon" />
      <h2 className="text-gray-700 font-times pt-2 font-bold text-base sm:text-lg">SMO</h2>
      <p className="text-gray-700 font-times p-4 px-4 text-justify text-sm sm:text-base">
      SMO works on different social media profiles to enhance engagement and brand awareness. We generate cringe-worthy content and drive strategies to expand your reach across platforms such as Facebook, Instagram, and LinkedIn. Our approach connects your brand with the right audience, nurturing a meaningful interaction
      </p>
    </div>
  </div>

  <div className="flex justify-center mt-10">
    <Link to="/services">
      <button className="text-sm sm:text-md font-bold font-opensas border-2 border-blue-950 text-blue-950 rounded-full px-4 sm:px-6 py-2 sm:py-4 transition-all hover:bg-blue-950 hover:text-white">
        More Services
      </button>
    </Link>
  </div>
</div>



<div className="h-auto mx-4 sm:mx-10 py-4 flex flex-col md:flex-row justify-center items-center gap-10">

  <div className=" w-full md:w-2/5 text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-8 mb-2 sm:mb-4 text-gray-700 font-bold font-times">
      We Work With the Best Partners
    </h2>
    <p className="text-gray-600 font-times text-lg text-justify">At Hitman Digital Marketing Agency in Delhi, we work with partners to ensure we deliver the best digital marketing services. Thus, by cooperating with reliable platforms and tools, we guarantee our clients will receive modern and effective tools and strategies for their business glowing in the digital environment.</p>
   
  </div>

  
  <div className="w-full md:w-3/5 flex flex-wrap gap-5 justify-center items-start">
    <img src={logo1} loading="lazy" className="w-28 h-16 sm:w-36 sm:h-20" alt="Logo 1" />
    <img src={logo2}  loading="lazy" className="w-28 h-16 sm:w-36 sm:h-20" alt="Logo 2" />
    <img src={logo3} loading="lazy" className="w-28 h-16 sm:w-36 sm:h-20" alt="Logo 3" />
    <img src={logo4} loading="lazy" className="w-28 h-16 sm:w-36 sm:h-20" alt="Logo 4" />
    <img src={logo5} loading="lazy" className="w-28 h-16 sm:w-36 sm:h-20" alt="Logo 5" />
  </div>
</div>

<div className=" flex justify-center items-center mb-6">
  
<button className="text-sm sm:text-md font-bold font-opensas mt-5 sm:mt-10 border-2 border-blue-950 text-gray-600 rounded-full px-6 py-3 sm:px-8 sm:py-4 hover:bg-blue-950 hover:text-white transition-all">
      More Clients
    </button>
    </div>

<div className="h-auto flex flex-col bg-gray-700 py-10">
  {/* Heading Section */}
  <div className="flex flex-col items-start justify-center px-5 sm:px-10">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-times">
  Strategic Solutions <br /> <span className="block">for Business Growth</span>
</h2>

  </div>

  <div
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-6 mt-10 px-5 sm:px-10"
    >
      {counters.map((counter, index) => (
        <div
          key={index}
          className="flex border-2 rounded-md bg-gray-100 w-full sm:w-[45%] md:w-[22%] h-auto p-6 flex-col justify-start items-center gap-4 md:flex-1 md:min-h-[250px]"
        >
          <img
            src={counter.image} 
            loading="lazy"
            className="h-8 sm:h-10 w-8 sm:w-10"
            alt={counter.label}
          />
          <p className="text-xl sm:text-2xl md:text-3xl text-center font-times text-gray-900">
            {startCounter && (
              <CountUp
                start={0}
                end={counter.value}
                duration={2}
                separator=","
              />
            )}
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl text-center font-times text-gray-900">
            {counter.label}
          </p>
        </div>
      ))}
    </div>
</div>

</div>
</>


  );
};

export default Home;
