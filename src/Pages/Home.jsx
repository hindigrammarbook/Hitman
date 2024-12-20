import {React ,useEffect} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seo2 from "../assets/seo2.png";
import network from "../assets/network.png";
import webDesign from "../assets/webDesign.png";
import strategy from "../assets/strategy.png";

import { Link } from "react-router-dom";
import PPC from "../assets/PPC.png";
import SEOO from "../assets/SEOO.png";
import SMM from "../assets/SMM.png";

import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import web from "../assets/web.png";
import group from "../assets/group.png";
import innovation from "../assets/innovation.png";
import star from "../assets/star.png";
import business from "../assets/business.png"
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import AOS from "aos";
import profession from "../assets/profession.png";
import laptop from "../assets/laptop.png";

import "aos/dist/aos.css";


const Home = () => {

  useEffect(() => {
      AOS.init({ duration:1000, once: true });
    }, []);

  return (
    <div>

<div className="h-[100vh] relative mt-16">
  <div className="flex flex-col pt-20 justify-start items-start  z-10" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <div className="px-10 w-[50%]">
    <h1 className="text-6xl  text-blue-950  font-times font-bold">Hitman Digital</h1>
    <h1 className="text-6xl text-blue-950 font-times font-bold">Marketing Agency</h1>
    <p className="mt-8 text-xl  text-justify font-times  text-slate-900"> Best Creative Digital Marketing Services For Startups that are tailored to fit your unique goals and challenges.</p>
    <div className="flex gap-5">
   <Link to="/services"><button  className=" text-md font-bold font-opensas mt-16  border-2 border-blue-950 bg-blue-950 text-white rounded-full  p-4  transition-all  " >Check Service</button></Link>
   <Link to="/contact"><button  className="  text-md font-bold font-opensas mt-16  border-2 border-blue-950 text-blue-950   rounded-full  p-4 transition-all  "  >Contact Now</button></Link>
    </div>
    </div>
  </div>
  
  

</div>

 <div className="h-[100vh]  flex  ">
  
    <div className="flex w-[40%] flex-col gap-10 justify-center items-center  bg-gray-700">
    <h2 className="text-6xl text-white  px-10 leading-normal  font-bold font-times" data-aos="fade-right">Hitman Digital Marketing Agency -</h2> 
    <p className="text-2xl text-white  px-10   font-bold font-times" data-aos="fade-left">your affordable digital marketing agency in Delhi!</p>
    </div>

    <div className="bg-gray-300 flex  text-justify flex-col gap-2  w-[60%]">

    <p className="text-lg text-blue-950 pt-6 px-10  font-times">Would you like to have the services of an effective digital marketing agency? Does your business need a solution that is result oriented and specifically tailored to the needs of Hitman Digital Marketing Agency in Devli, New Delhi? Being one of the cheap companies in digital marketing, we help you accomplish your online goals while making a small dent in your budget.</p>
    <p className="text-lg text-blue-950 pt-2 px-10  font-times">
    From visibility of your business to traffic and conversion rates, we develop some of the best strategies involving today’s best brains and give you that unbeatable edge. From the small business man and growing company, our services have been created to help you get success now in this highly competitive environment.</p>

    <p className="text-lg text-blue-950 pt-2 px-10  font-times">
    Your future is well made at The Hitman Digital Marketing Agency- the best digital marketing company in Delhi- partner for the best. Now, incorporate some help from a business towards development, and let one online step to become with stride
    </p>
    <p className="text-lg text-blue-950 pt-2 px-10  font-times">Call us now and be part of the wagon in changing your online world today!</p>
    <div className="flex justify-center items-center mt-10 gap-10">
    <Link to="/contact"><button  className="  text-md  font-bold font-opensas  border-2 border-gray-700 text-gray-700  hover:bg-gray-700  hover:text-white  rounded-full  p-4 transition-all" data-aos="fade-up" >Contact Now</button></Link>
    </div>
    </div>



 </div>


    <div className="h-auto flex w-full my-20 justify-start items-start">
        <div className="flex  flex-col w-2/5 px-10 gap-5">
          <p className="text-3xl font-times  text-gray-700 ">Our Expertise in Digital Marketing</p>
          <h2 className="text-5xl font-times font-bold text-blue-950">Digital Marketing</h2>
          <h2 className="text-5xl font-times font-bold text-blue-950">Services</h2>
          <p className="text-lg font-times font-thin text-gray-700">Yahan pr text aaiga</p>

          <div className="flex flex-wrap justify-center items-center gap-10 mt-8">
            <div className="h-16 w-16 border-2 border-gray-800    rounded-full"   data-aos="zoom-in">
              <img src={seo2} className="h-full w-full rounded-full" alt="" /></div>


            <div className="h-16 w-16 border-2 border-gray-800 rounded-full"  data-aos="zoom-in"><img src={network} className="h-full w-full rounded-full" alt="" /></div>
            <div className="h-16 w-16 border-2 border-gray-800  rounded-full"  data-aos="zoom-in"><img src={strategy} className="h-full w-full rounded-full" alt="" /></div>
            <div className="h-16 w-16 border-2  border-gray-800 rounded-full"  data-aos="zoom-in"><img src={webDesign} className="h-full w-full rounded-full" alt="" /></div>
           
           
          </div>
          
          <div>
            <Link to="/services"><button  className="  text-lg font-bold font-opensas mt-5  border-2 border-blue-950 text-gray-600 rounded-full  p-4 hover:bg-blue-950 hover:text-white transition-all  " >More Services</button></Link>
          </div>

        </div>
        <div className="flex w-3/5  ">
          <div className=" flex gap-4 h-[90vh]  w-50%" data-aos="zoom-in-up">
            <img className="h-full w-full" src={service1} alt="" />
            <img className="h-full w-full" src={service2} alt="" />
          </div>
          
        </div>
      </div>
  


      <div className="h-auto  mx-10 py-10 flex justify-center items-center">
        <div className=" px-2 w-2/5">
          <h2 className="text-6xl mt-8 mb-4 text-gray-700 font-bold font-times"> We  Work With  the</h2>
          <h2 className="text-6xl mt-8 mb-4 text-gray-700 font-bold font-times" > Best Partners</h2>
          <button  className="  text-md font-bold font-opensas mt-10 border-2 border-blue-950 text-gray-600 rounded-full w-auto p-4 hover:bg-blue-950 hover:text-white transition-all  " >More Clients</button>
        </div>
        <div className="w-3/5  gap-10 justify-center items-center flex flex-wrap ">

      
          <img src={logo1} className="w-44 h-20" alt="" />
          <img src={logo2} className="w-44 h-20"  alt="" />
          <img src={logo3} className="w-44 h-20"  alt="" />
          <img src={logo4} className="w-44 h-20"  alt="" />
          <img src={logo5} className="w-44 h-20"  alt="" />

        </div>
        

      </div>


      


      <div className="h-auto py-20 ">
        <h2 className="text-centre  mb-20  text-6xl font-times text-gray-700 font-bold flex justify-center items-center">Services Of Our Company</h2>

      <div className="grid grid-cols-3 h-[90vh]  grid-rows-2 mx-20 ">
      <div className="bg-gray-700 border-2">
        <img src={business} className="h-full w-full" alt="" />
        
      </div>
      <div className="bg-white border-2 flex flex-col pt-4 justify-start  items-center">
          <img src={SEOO}  className="h-10  w-10" alt="" />
          <h2 className="text-gray-700 font-times pt-2 font-bold text-lg">SEO</h2>
          <p className="text-gray-700 font-times pt-4 px-4 text-justify text-lg">Search engine optimization (SEO) is the practice of improving a website's ranking in search results to increase the amount of targeted traffic it receives.</p>
      </div>
      <div className="bg-gray-700 border-2">  
        <img src={laptop} className="h-full w-full" alt="" />
      </div>
      <div className="bg-white border-2 flex flex-col pt-4 justify-start  items-center">
          <img src={PPC}  className="h-10  w-10" alt="" />
          <h2 className="text-gray-700 font-times pt-4 font-bold text-lg">PPC</h2>
          <p className="text-gray-700 font-times pt-4 px-4 text-justify text-lg">Pay-per-click (PPC) is an online advertising model in which an advertiser pays a publisher every time an advertisement link is “clicked” on..</p>
      </div>
      <div className="bg-gray-700 border-2">
      <img src={profession} className="h-full w-full" alt="" />
      </div>
      <div className="bg-white border-2 flex flex-col pt-4 justify-start  items-center">
          <img src={SMM}  className="h-10 w-10" alt="" />
          <h2 className="text-gray-700 font-times pt-4 font-bold text-lg">SMO</h2>
          <p className="text-gray-700 font-times pt-4 px-4 text-justify text-lg">Social media optimization (SMO) is the use of social media sites to manage and enhance an organization's message and online presence.</p>
      </div>
      </div>


      </div> 


      <div className="h-[100vh] flex flex-col  bg-gray-700">

        <div className="flexjustify-center  items-start pt-10 mx-10">
          <h2 className="text-6xl font-bold  text-white font-times">Strategic Solutions</h2>
          <h2 className="text-6xl pt-6 text-white font-bold font-times"> for Business  Growth</h2>

        </div>
        <div className="flex justify-center h-auto gap-10 mx-10 mt-20 items-center">
          <div className="flex border-2 rounded-md bg-gray-100 w-[25%] h-64 flex-col justify-start items-center  p-4 gap-4">
            <img src={star} className="h-10 w-10" alt="" />
            <p className="text-3xl text-center font-times text-gray-900">100%</p>
            <p className="text-3xl text-center font-times text-gray-900">Increased Revenue</p>
          </div>
          <div className="flex border-2 rounded-md bg-gray-100 w-[25%] h-64 flex-col justify-start items-center  p-4 gap-4" >
          <img src={web} className="h-10 w-10" alt="" />
            <p className="text-3xl text-center font-times text-gray-900">12k </p>
            <p className="text-3xl text-center font-times text-gray-900">Optimized Process</p>
          </div>
          <div className="flex border-2 rounded-md bg-gray-100 w-[25%] h-64 flex-col justify-start items-center  p-4 gap-4" >
          <img src={group} className="h-10 w-10" alt="" />
            <p className="text-3xl text-center font-times text-gray-900">24</p>
            <p className="text-3xl text-center font-times text-gray-900">Expanded Market</p></div> 
          <div className="flex border-2 rounded-md bg-gray-100 w-[25%] h-64 flex-col justify-start items-center  p-4 gap-4" >
          <img src={innovation} className="h-20 w-20" alt="" />
            <p className="text-3xl text-center font-times text-gray-900">84</p>
            <p className="text-3xl text-center font-times text-gray-900">Enhanced Efficiency</p>
          </div>
        </div>


      </div>
   

    

</div>



  );
};

export default Home;
