import {React ,useEffect }from "react";
import  rb1 from "../assets/rb1.png";
import rb2 from "../assets/rb2.png";
import rb3 from "../assets/rb3.png";
import video1 from "../assets/video1.mp4";
import start from "../assets/start.png";
import AOS from "aos";
import scroll from "../assets/scrollDown.png";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

const handleScroll=()=>{
  window.scrollTo({
    top:800,
    behavior:"smooth",

  })

}
  

  return (
    <div>
    <div className="mt-16 h-auto w-full relative">
    <div className="absolute inset-0 flex justify-center items-center opacity-10">
    <span className="text-[250px]  text-gray-700 font-extrabold font-times">Hitman Digital</span>
  </div>
        <div className="flex flex-col py-16 justify-center items-center">
          <h2 className="text-7xl text-blue-950 font-bold font-times border-y-2 border-gray-800 p-10" data-aos="zoom-out-up"> About </h2>
          <p className="text-2xl text-gray-700 font-bold text-justify py-6 px-20 leading-normal  font-times" >Welcome to Hitman Digital Marketing! Since our inception in April 2022, we have been focused on helping businesses thrive in the fast-paced digital world. Our goal is straight forward: to offer tailored digital marketing strategies that deliver real, measurable results. Whether you are a new business or an established brand, we provide solutions designed to meet your unique objectives and help you rise above the competition in a crowded online space.</p>
          <p className="text-2xl text-gray-700 font-bold text-justify px-20   font-times"> Our expert team specializes in a range of services, from search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management, content creation, and more. Each service is designed strategically to promote your online presence, build traffic, and drive better conversions.
          </p>
          
          <p className="text-4xl text-blue-950 my-10  font-bold font-times"> Scroll Down</p>
          <img src={scroll} className="h-10 w-10 mt-10 cursor-pointer jumping-image" onClick ={handleScroll} alt="" />
        </div>

    </div>

      <div className="relative pt-10 pb-20 w-full">
      <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-15"
          src={video1}
          autoPlay
          loop
          muted
        ></video>
        <div className="  text-center">
        <h2 className="text-blue-950 my-10 text-7xl font-bold font-opensas"> What We Do</h2>
        </div>
        <div className=" mx-auto py-20   mt-10  flex flex-row  px-20 gap-10">
        
          <div className="p-4 w-[33.3%]  flex flex-col border-2 border-blue-950 rounded-xl bg-transparent hover:bg-blue-950 transform transition-transform duration-300 ease-in-out hover:scale-105 group" data-aos="flip-left">
            <p className=" text-6xl text-fill  font-extrabold text-center transition-colors duration-300 ease-in-out group-hover:text-gray-500 ">01</p>
            <h2 className="text-4xl my-5 flex justify-center items-center text-white font-bold font-opensas">OUR MISSION</h2>
            <p className="p-4  text-justify text-xl  font-bold font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-white">our mission is to enable businesses to prosper in the fast-paced world of digital. We are fully committed to creating innovative and results-driven strategies that help clients improve their online presence and stand out in their respective industries while achieving specific goals. Our team of professionals works diligently to design marketing solutions tailored to meet and exceed client expectations.

            </p>
          </div>



          <div className="p-4 w-[33.3%]  flex flex-col border-2 border-white rounded-xl bg-transparent hover:bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 group" data-aos="flip-left">
          <p className=" text-6xl text-fill  font-extrabold transition-colors duration-300 ease-in-out group-hover:text-gray-600 text-center ">02</p>
          <h2 className="text-4xl my-5 flex justify-center items-center  text-blue-950 font-bold font-opensas">OUR VALUES</h2>
            <p className="p-4  text-justify text-xl  font-bold font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-blue-950"> We pride ourselves on transparency and honesty in every interaction. Our clients trust us to deliver real, results-driven solutions, and we take that trust seriously. We believe every client is a partner. Through collaboration, we get to understand their goals, challenges, and needs deeply to ensure that our strategies perfectly align with your vision.
            </p>
          </div>



          <div className="p-4 w-[33.3%]  flex flex-col border-2 border-blue-950 rounded-xl bg-transparent hover:bg-blue-950 transform transition-transform duration-300 ease-in-out hover:scale-105 group" data-aos="flip-right">
          <p className=" text-6xl text-fill  font-extrabold transition-colors duration-300 ease-in-out group-hover:text-gray-500 text-center ">03</p>
          <h2 className="text-4xl my-5 flex justify-center items-center text-white font-bold font-opensas">OUR VISION </h2>
          <p className="p-4  text-justify text-xl  font-bold font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-white">At Hitman Digital Marketing, we envision ourselves as a harbinger of change, catalyzing businesses into forceful, influential digital brands. We aim to help our customers not only survive but thrive through the fast-changing world of digital. 
          </p>
          </div>

          

        </div>
      
          <div className=" pb-10 text-center">
          <h2 className="text-blue-950 my-10 text-7xl font-bold font-opensas"> Why Choose Us</h2>
          <p className=" mt-12 pt-2 text-3xl font-times text-gray-700 px-52 ">We specialize in crafting data-driven strategies that deliver measurable results. Whether it’s boosting your online visibility through SEO, running high-converting ad campaigns, or engaging your audience on social media, we ensure your brand gets the attention it deserves.</p>
          </div>
 
      <div className="h-auto flex flex-col  w-screen">

    
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
          <p className="text-xl font-opensas font-bold text-justify pr-40 leading-8 text-slate-600">Your website is your digital storefront. We create visually stunning, user-friendly, and high-performing websites tailored to your unique business needs. From e-commerce platforms to custom web applications, our developers ensure seamless functionality and a memorable user experience.</p>
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
    


    </div>

    <div className="h-auto">
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

      <div className=" flex flex-col  items-center justify-center h-auto pb-44 p-10">
       
        <h2 className="text-7xl mt-10 font-opensas mb-10 text-blue-950 text-center">Why Wait? Start Now</h2>

        
        <p className="text text-2xl  text-gray-700 text-center mt-10 ">Contact us today to create a custom digital marketing plan tailored to your startup’s success.</p>
        
        <p className="text-2xl mt-14 font-times  px-10 text-justify text-gray-700">Digital marketing is the fuel that powers startup growth in today’s competitive environment. Whether you’re launching your product, building a customer base, or scaling operations, a solid digital marketing strategy can unlock the potential your startup needs.</p>

       <Link to='/contact'><button  className="  text-3xl font-bold font-opensas mt-16 border-4 border-blue-950 text-gray-600 rounded-full w-auto p-6 hover:bg-blue-950 hover:text-white transition-all  " > Contact Now</button></Link>

        
      </div>


    </div>
  );
};

export default About;

