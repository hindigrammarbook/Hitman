import {React ,useEffect} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seo2 from "../assets/seo2.png";
import network from "../assets/network.png";
import webDesign from "../assets/webDesign.png";
import strategy from "../assets/strategy.png";
import seo from "../assets/seo.png";
import pay from "../assets/Pay.png";
import { Link } from "react-router-dom";
import Dollar from "../assets/Dollar.png";
import Social from "../assets/Social.png";
import BJW from "../assets/BJW.png";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import web from "../assets/web.png";
import group from "../assets/group.png";
import innovation from "../assets/innovation.png";
import star from "../assets/star.png";
import Homebg from "../assets/Homebg.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import AOS from "aos";
import bg2 from "../assets/bg2.jpg";

import "aos/dist/aos.css";


const Home = () => {

  useEffect(() => {
      AOS.init({ duration:1000, once: true });
    }, []);

  return (
    <div>

<div className="h-[100vh] mt-28  relative">
  
  {/* <div className="absolute inset-0 bg-cover bg-center   opacity-20" style={{ backgroundImage:`url(${bg2})`}}></div> */}

  
  <div className="flex flex-col pt-2 gap-10 justify-center items-center relative z-10" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <h1 className="text-8xl px-20 text-blue-950  font-times font-bold">Hitman Digital</h1>
    <h1 className="text-8xl px-20 text-blue-950 font-times font-bold">Marketing Agency</h1>
    <p className="mt-10 text-3xl px-20 font-times font-bold text-slate-900"> Best Creative Digital Marketing Services For Startups that are tailored to fit your unique goals and challenges.</p>
    <div className="flex justify-center items-center gap-10">
   <Link to="/services"><button  className=" text-3xl font-bold font-opensas mt-16  border-4 border-blue-950 bg-blue-950 text-white rounded-full  p-6   transition-all  " >Check Service</button></Link>
   <Link to="/contact"><button  className="  text-3xl font-bold font-opensas mt-16  border-4 border-blue-950 text-blue-950   rounded-full  p-6 transition-all  "  >Contact Now</button></Link>
    </div>
  </div>
  
  

</div>

 <div className="h-[100vh]  flex  mt-10 ">
    <div className="flex w-[40%] flex-col gap-14 bg-gray-700">
    <h2 className="text-7xl text-white  pt-20 px-20  leading-normal  font-bold font-times" data-aos="fade-right">Hitman Digital Marketing Agency -</h2> 
    <p className="text-4xl text-white  px-20   font-bold font-times" data-aos="fade-left">your affordable digital marketing agency in Delhi!</p>
    </div>

    <div className="bg-gray-300 flex  text-justify flex-col gap-2  w-[60%]">

    <p className="text-2xl text-blue-950 pt-10 px-20  font-times">Would you like to have the services of an effective digital marketing agency? Does your business need a solution that is result oriented and specifically tailored to the needs of Hitman Digital Marketing Agency in Devli, New Delhi? Being one of the cheap companies in digital marketing, we help you accomplish your online goals while making a small dent in your budget.</p>
    <p className="text-2xl text-blue-950 pt-4 px-20  font-times">
    From visibility of your business to traffic and conversion rates, we develop some of the best strategies involving today’s best brains and give you that unbeatable edge. From the small business man and growing company, our services have been created to help you get success now in this highly competitive environment.</p>

    <p className="text-2xl text-blue-950 pt-4 px-20  font-times">
    Your future is well made at The Hitman Digital Marketing Agency- the best digital marketing company in Delhi- partner for the best. Now, incorporate some help from a business towards development, and let one online step to become with stride
    </p>
    <p className="text-2xl text-blue-950 pt-4 px-20  font-times">Call us now and be part of the wagon in changing your online world today!</p>
    <div className="flex justify-center items-center mt-10 gap-10">
    <Link to="/contact"><button  className="  text-3xl  font-bold font-opensas  border-4 border-gray-700 text-gray-700  hover:bg-gray-700  hover:text-white  rounded-full  p-6 transition-all" data-aos="fade-up" >Contact Now</button></Link>
    </div>
    </div>



 </div>


      
   {/* <div className="flex flex-col   md:flex-row items-center justify-between min-h-screen pl-8">
   
<div className="flex my-20  justify-between items-center mx-10">
      <div  className="  w-3/5 text-5xl  pr-10 font-bold">
      <h2 className="mb-10  text-7xl">The Digital Marketing Experts</h2>
      <p className="text-xl font-times font-thin text-justify text-gray-600">
      Introducing Hitman Digital Marketing Agency – your affordable digital marketing agency in Delhi!

      Would you like to have the services of an effective digital marketing agency? Does your business need a solution that is result oriented and specifically tailored to the needs of Hitman Digital Marketing Agency in Devli, New Delhi? Being one of the cheap companies in digital marketing, we help you accomplish your online goals while making a small dent in your budget.
      </p>
      <p className="text-xl font-times font-thin text-justify text-gray-600">
      From visibility of your business to traffic and conversion rates, we develop some of the best strategies involving today’s best brains and give you that unbeatable edge. From the small business man and growing company, our services have been created to help you get success now in this highly competitive environment.

      Your future is well made at The Hitman Digital Marketing Agency- the best digital marketing company in Delhi- partner for the best. Now, incorporate some help from a business towards development, and let one online step to become with stride.

      Call us now and be part of the wagon in changing your online world today!

    </p>
      </div>
      <div className="relative w-2/5 flex justify-center group">
          
            <div className="absolute bg-blue-300 rounded-full bottom-0 h-[10%] w-[10%] -z-10 group-hover:h-[100%] group-hover:w-[70%] right-40 transition-all duration-500 ease-in-out border border-gray-500"></div>
            <div className="absolute bg-blue-900 rounded-full bottom-0 h-[10%] w-[10%] -z-10 group-hover:h-[90%] group-hover:w-[60%]  left-72 transition-all duration-500 ease-in-out border border-blue-950"></div>

      
            <div className="absolute bottom-56 left-10 flex flex-row gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:scale-100 transform scale-0">
             
            <img
                src={seo}
                alt="SEO"
                className="w-14 h-14 object-cover c"
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
    </div> */}


    <div className="h-auto flex w-full py-36 justify-start items-start">
        <div className="flex  flex-col w-2/5 ml-20 gap-5">
          <p className="text-3xl font-times font-bold text-gray-700 ">Our Expertise in Digital Marketing</p>
          <h2 className="text-6xl font-times font-bold text-blue-950">Digital Marketing</h2>
          <h2 className="text-6xl font-times font-bold text-blue-950">Services</h2>

          <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
            <div className="h-20 w-20 border-2 border-gray-800    rounded-full"   data-aos="zoom-in">
              <img src={seo2} className="h-full w-full rounded-full" alt="" /></div>


            <div className="h-20 w-20 border-2 border-gray-800 rounded-full"  data-aos="zoom-in"><img src={network} className="h-full w-full rounded-full" alt="" /></div>
            <div className="h-20 w-20 border-2 border-gray-800  rounded-full"  data-aos="zoom-in"><img src={strategy} className="h-full w-full rounded-full" alt="" /></div>
            <div className="h-20 w-20 border-2  border-gray-800 rounded-full"  data-aos="zoom-in"><img src={webDesign} className="h-full w-full rounded-full" alt="" /></div>
           
           
          </div>
          
          <div>
            <Link to="/services"><button  className="  text-3xl font-bold font-opensas mt-16  border-4 border-blue-950 text-gray-600 rounded-full  p-6 hover:bg-blue-950 hover:text-white transition-all  " >More Services</button></Link>
          </div>

        </div>
        <div className="flex w-3/5 mr-20 ">
          <div className=" flex gap-4 h-[90vh]  w-50%" data-aos="zoom-in-up">
            <img className="h-full w-full" src={service1} alt="" />
            <img className="h-full w-full" src={service2} alt="" />
          </div>
          
        </div>
      </div>
  


      <div className="h-auto  mx-20 pb-44 flex justify-center items-center">
        <div className=" px-2 w-2/5">
          <h2 className="text-7xl mt-8 mb-4 text-gray-700 font-bold font-times"> We  Work With  the</h2>
          <h2 className="text-7xl mt-8 mb-4 text-gray-700 font-bold font-times" > Best Partners</h2>
          <button  className="  text-3xl font-bold font-opensas mt-16 border-4 border-blue-950 text-gray-600 rounded-full w-auto p-6 hover:bg-blue-950 hover:text-white transition-all  " >More Clients</button>
        </div>
        <div className="w-3/5 pl-44 gap-10 justify-center items-center flex flex-wrap ">

      
          <img src={logo1} className="w-44 h-20" alt="" />
          <img src={logo2} className="w-44 h-20"  alt="" />
          <img src={logo3} className="w-44 h-20"  alt="" />
          <img src={logo4} className="w-44 h-20"  alt="" />
          <img src={logo5} className="w-44 h-20"  alt="" />

        </div>
        

      </div>


      


      <div className="h-auto pb-20 ">
        <h2 className="text-centre mt-8 mb-20  text-7xl font-times text-gray-700 font-bold flex justify-center items-center">Backbone of Our Company</h2>
        <div className="px-10 flex flex-wrap gap-6 justify-center items-center">
       
          <div className="h-80 w-80  rounded-tl-3xl border-gray-950 border-4">

          </div>
          <div className="h-80 w-80  rounded-tl-3xl border-gray-950 border-4"></div>
          <div className="h-80 w-80  rounded-tl-3xl border-gray-950 border-4"></div>
          <div className="h-80 w-80  rounded-tl-3xl border-gray-950 border-4"></div>
          <div className="h-80 w-80  rounded-tl-3xl border-gray-950 border-4"></div>

        </div>
      </div>


      <div className="h-[100vh] flex flex-col  bg-gray-700">

        <div className="flexjustify-center items-start pt-20 mx-20">
          <h2 className="text-7xl font-bold  text-white font-times">Strategic Solutions</h2>
          <h2 className="text-7xl text-white font-bold font-times"> for Business  Growth</h2>

        </div>
        <div className="flex justify-center h-auto gap-10 mx-20 mt-20 items-center">
          <div className="flex border-2 rounded-md bg-gray-100 w-[25%] h-80 flex-col justify-start items-center  p-4 gap-4" >
            <img src={star} className="h-20 w-20" alt="" />
            <p className="text-5xl text-center font-times text-gray-900">100%</p>
            <p className="text-5xl text-center font-times text-gray-900">Increased Revenue</p>
          </div>
          <div className="flex border-2 rounded-md bg-gray-100 w-[25%] h-80 flex-col justify-start items-center  p-4 gap-4" >
          <img src={web} className="h-20 w-20" alt="" />
            <p className="text-5xl text-center font-times text-gray-900">12k </p>
            <p className="text-5xl text-center font-times text-gray-900">Optimized Process</p>
          </div>
          <div className="flex border-2 rounded-md bg-gray-100 w-[25%] h-80 flex-col justify-start items-center  p-4 gap-4" >
          <img src={group} className="h-20 w-20" alt="" />
            <p className="text-5xl text-center font-times text-gray-900">24</p>
            <p className="text-5xl text-center font-times text-gray-900">Expanded Market</p></div> 
          <div className="flex border-2 rounded-md bg-gray-100 w-[25%] h-80 flex-col justify-start items-center  p-4 gap-4" >
          <img src={innovation} className="h-20 w-20" alt="" />
            <p className="text-5xl text-center font-times text-gray-900">84</p>
            <p className="text-5xl text-center font-times text-gray-900">Enhanced Efficiency</p>
          </div>
        </div>


      </div>
   

    

</div>



  );
};

export default Home;
