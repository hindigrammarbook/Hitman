import {React ,useEffect }from "react";
import bg1 from "../assets/bg1.png";
import ad from "../assets/adwords.png";
import seo from "../assets/seo.png";
import pay from "../assets/Pay.png";
import rocket from "../assets/rocket.png";
import Dollar from "../assets/Dollar.png";
import Social from "../assets/Social.png";
import BJW from "../assets/BJW.png";
import  rb1 from "../assets/rb1.png";
import rb2 from "../assets/rb2.png";
import rb3 from "../assets/rb3.png";
import video1 from "../assets/video1.mp4";
import start from "../assets/start.png";
import AOS from "aos";
import "aos/dist/aos.css"

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div>
    <div className="  mt-28">
      <div
        className="w-full bg-cover bg-center  h-screen relative overflow-hidden "
        style={{ background: `url(${bg1})` }}
      > 

      <div className="justify-center mt-48 gap-10 flex flex-col items-center">
        <h1 className="text-center   text-white font-bold text-7xl font-times ">
          ABOUT US
        </h1>

        
        <p className=" text-white text-2xl  mt-14 text-justify font-geologica">"Shoot for the stars, hit your goals with Hitman Digital Pvt Ltd – specialists in marketing and website development."</p>
         <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text border-4 border-white p-10"> Hitman Digital Marketing Agency</h2> <p className=" text-white text-2xl   px-10 font-geologica"> we take aim at your success with innovative marketing strategies and flawless web design.</p>

        </div>

        
        <img src={ad} alt="Ad" className="animated-icon icon-1" />
        <img src={seo} alt="SEO" className="animated-icon icon-2" />
        <img src={pay} alt="Pay" className="animated-icon icon-3" />
        <img src={rocket} alt="Rocket" className="animated-icon icon-4" />
        <img src={Dollar} alt="Dollar" className="animated-icon icon-5" />
        <img src={Social} alt="Social" className="animated-icon icon-6" />
      </div>

    
      </div>

      <div className="   relative pt-10 pb-20 w-full bg-blue-300 ">
      <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-15"
          src={video1}
          autoPlay
          loop
          muted
        ></video>
        
      
          <div className=" pb-10 text-center">
          <h2 className="text-blue-950 my-10 text-7xl font-bold font-opensas"> Why Choose Us</h2>
          <p className=" mt-12 pt-2 text-3xl font-times text-yellow-50 px-52 ">We specialize in crafting data-driven strategies that deliver measurable results. Whether it’s boosting your online visibility through SEO, running high-converting ad campaigns, or engaging your audience on social media, we ensure your brand gets the attention it deserves.</p>
          </div>
 
      <div className="h-auto flex flex-col pb-14 bg-blue-300 w-screen">

    
      <div className="flex  h-64 mx-20  items-center">
      
    
        <div className="w-[30%] pt-14">
        <img
        src={rb1}
        className="h-96 w-50% object-contain"
        alt=""
      />
        </div>
        <div className="w-[70%]  text-start">
          <h2 className=" text-3xl mb-8 font-geologica font-bold text-blue-950 "> Proven Expertise in Digital Marketing</h2>
          <p className="text-xl font-opensas font-bold text-justify pr-40 leading-8 text-slate-600">We specialize in crafting data-driven strategies that deliver measurable results. Whether it’s boosting your online visibility through SEO, running high-converting ad campaigns, or engaging your audience on social media, we ensure your brand gets the attention it deserves.</p>
        </div>
      </div>
      
      <div className="flex h-64 mx-20 mt-10 items-center flex-row-reverse">
        <div className="w-[30%] pt-14">
          <img src={rb2} className="h-96 w-full object-contain" alt="" />
        </div>
        <div className="w-[70%] text-start">
        <h2 className=" text-3xl mb-8  font-geologica font-bold  text-blue-950">Cutting-Edge Web Development</h2>
          <p className="text-xl font-opensas font-bold text-justify pr-40 leading-8 text-slate-600">We specialize in crafting data-driven strategies that deliver measurable results. Whether it’s boosting your online visibility through SEO, running high-converting ad campaigns, or engaging your audience on social media, we ensure your brand gets the attention it deserves.</p>
        </div>
      </div>
      
      <div className="flex h-64 mx-20 mt-10  items-center">
        <div className="w-[30%] pt-14 ">
          <img src={rb3} className="h-96 w-50% object-contain " alt="" />
        </div>
        <div className="w-[70%] text-start">
        <h2 className=" text-3xl mb-8 font-geologica text-blue-950 font-bold ">Comprehensive Services Under One Roof
        </h2>
        <p className="text-xl font-opensas font-bold text-justify pr-40 leading-8 text-slate-600">Save time and effort by working with a single agency for all your digital needs. From branding and marketing to web design and development, we provide end-to-end solutions to streamline your digital journey</p>
        </div>
      </div>
    </div>
    <div className=" mx-auto py-20   mt-10  flex flex-row  px-20 gap-10">
      
          <div className="p-4 w-[25%]  flex flex-col border-2 border-blue-950 rounded-xl bg-transparent hover:bg-blue-950 transform transition-transform duration-300 ease-in-out hover:scale-105 group" data-aos="flip-left">
            <p className=" text-6xl text-fill  font-extrabold text-center transition-colors duration-300 ease-in-out group-hover:text-gray-500 ">01</p>
            <h2 className="text-4xl my-5 flex justify-center items-center text-white font-bold font-opensas">OUR VISION</h2>
            <p className="p-4  text-justify text-xl  font-bold font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-white">We envision a future where every business, big or small, can unlock the true power of digital marketing to elevate their brand, connect with their audience, and achieve long-term success. We are committed to creating impactful, data-driven campaigns that foster brand loyalty, drive conversions, and position your business as a leader in your industry.
            </p>
          </div>



          <div className="p-4 w-[25%]  flex flex-col border-2 border-white rounded-xl bg-transparent hover:bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 group" data-aos="flip-left">
          <p className=" text-6xl text-fill  font-extrabold transition-colors duration-300 ease-in-out group-hover:text-gray-600 text-center ">02</p>
          <h2 className="text-4xl my-5 flex justify-center items-center  text-blue-950 font-bold font-opensas">OUR VISION</h2>
            <p className="p-4  text-justify text-xl  font-bold font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-blue-950">We envision a future where every business, big or small, can unlock the true power of digital marketing to elevate their brand, connect with their audience, and achieve long-term success. We are committed to creating impactful, data-driven campaigns that foster brand loyalty, drive conversions, and position your business as a leader in your industry.
            </p>
          </div>



          <div className="p-4 w-[25%]  flex flex-col border-2 border-blue-950 rounded-xl bg-transparent hover:bg-blue-950 transform transition-transform duration-300 ease-in-out hover:scale-105 group" data-aos="flip-right">
          <p className=" text-6xl text-fill  font-extrabold transition-colors duration-300 ease-in-out group-hover:text-gray-500 text-center ">03</p>
          <h2 className="text-4xl my-5 flex justify-center items-center text-white font-bold font-opensas">OUR VISION</h2>
          <p className="p-4  text-justify text-xl  font-bold font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-white">We envision a future where every business, big or small, can unlock the true power of digital marketing to elevate their brand, connect with their audience, and achieve long-term success. We are committed to creating impactful, data-driven campaigns that foster brand loyalty, drive conversions, and position your business as a leader in your industry.
          </p>
          </div>

          <div className="p-4 w-[25%]  flex flex-col border-2 border-white rounded-xl bg-transparent hover:bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 group" data-aos="flip-right">
          <p className=" text-6xl text-fill  font-extrabold transition-colors duration-300 ease-in-out group-hover:text-gray-600 text-center" >04</p>
          <h2 className="text-4xl my-5 flex justify-center items-center  text-blue-950 font-bold font-opensas">OUR VISION</h2>
            <p className="p-4  text-justify text-xl  font-bold font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-blue-950">We envision a future where every business, big or small, can unlock the true power of digital marketing to elevate their brand, connect with their audience, and achieve long-term success. We are committed to creating impactful, data-driven campaigns that foster brand loyalty, drive conversions, and position your business as a leader in your industry.
            </p>
          </div>

        </div>


    </div>

    <div className="h-auto bg-blue-300">
    <div className="flex flex-row p-10">
      
      <div className="w-1/2" data-aos="fade-right">
        <img src={start} alt="Startup" />
      </div>

      
      <div className="w-1/2" data-aos="fade-up">
        <h2 className="text-blue-950 px-10 leading-normal my-10 text-7xl font-bold font-opensas">
          Why Digital Marketing for Startup
        </h2>
    
    </div>
          </div>
          <div className=" flex flex-col mx-10 px-10 "> 
            <p className="pb-4 text-justify leading-normal text-2xl  font-bold font-times text-gray-700" >In today’s digital-first world, establishing a strong online presence is not just an option—it’s the foundation for growth and success. Digital marketing has revolutionized how businesses interact with their audience, offering startups an unparalleled opportunity to compete with larger, established companies.</p>
            <div className="flex  flex-wrap justify-center pb-10 mt-10 gap-3 ">
              <div className="h-96 mb-2  w-[500px] border-[20px]  border-blue-900" data-aos="zoom-out-left"><h2 className="text-4xl p-6 text-gray-700 text-center font-bold font-times" >Reaching the Right Audience</h2>
              <p className="text-xl px-10  text-justify font-opensas text-gray-500">Digital marketing allows startups to zero in on their ideal customers. With tools like social media targeting, Google Ads, and analytics, you can segment your audience based on demographics, interests, and online behavior.</p></div>

              <div className="h-96 w-[500px]  border-[20px]  bg-blue-800 border-slate-200" data-aos="zoom-out-right"><h2 className="text-4xl p-6 text-blue-300 text-center font-bold font-times" > Building Awareness and Credibility</h2><p className="text-xl px-10  text-justify font-opensas text-slate-100">For a startup, visibility is everything. Digital marketing helps you establish your brand’s identity through engaging content, consistent messaging, and valuable interactions. </p></div>

              <div className="h-96 w-[500px]  border-[20px]  border-blue-900" data-aos="zoom-out-left"><h2 className="text-4xl p-6 text-gray-700 text-center font-bold font-times">Real-Time Results and Insights</h2><p className="text-xl px-10  text-justify font-opensas text-gray-500">With digital marketing, startups can monitor the performance of their campaigns in real-time. This immediate feedback allows for quick adjustments to optimize outcomes. </p></div>

              <div className="h-96 w-[500px]  border-[20px]  bg-blue-800  border-slate-200" data-aos="zoom-out-right"><h2 className="text-4xl p-6 text-blue-300 text-center font-bold font-times" >Affordable and Scalable Solutions</h2><p className="text-xl px-10  text-justify font-opensas text-slate-100">Startups often operate on tight budgets, and digital marketing provides cost-effective options like pay-per-click ads, influencer collaborations, and organic growth through search engine optimization (SEO)</p></div>

              <div className="h-96 mb-2  w-[500px] border-[20px]  border-blue-900" data-aos="zoom-out-left"><h2 className="text-4xl p-6 text-gray-700 text-center font-bold font-times" > Driving Conversions and Growth</h2><p className="text-xl px-10  text-justify font-opensas text-gray-500">From attracting website traffic to converting leads into customers, digital marketing provides a structured funnel for growth. Email campaigns nurture potential customers, while retargeting ads bring them back to complete their journey</p></div>

              <div className="h-96 w-[500px]  border-[20px]  bg-blue-800 border-slate-200" data-aos="zoom-out-right"><h2 className="text-4xl p-6 text-blue-300 text-center font-bold font-times" > Leveling the Playing Field</h2> <p className="text-xl px-10  text-justify font-opensas text-slate-100">Digital marketing allows startups to zero in on their ideal customers. With tools like social media targeting, Google Ads, and analytics, you can segment your audience based on demographics, interests, and online behavior.</p></div>

            </div>

          </div>
          
    </div>


    </div>
  );
};

export default About;

