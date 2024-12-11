import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../components/Heading'
import Cards from '../components/Cards'


import forward from '../assets/forward.png'

const SMM = () => {
 
  return (
    <div className='mt-40 relative'>
     <Heading text="Social Media Marketing"/>
      <div className="mt-10 mx-16 px-16 ">
      
     
      <h2 className=" mt-10  flex justify-center text-4xl font-bold font-opensas">What is Social Media Marketing?</h2>
      <div >
      <p className=" mt-10 text-justify text-xl ">Social media marketing is the process of using social media platforms and websites to promote a product or service. It involves creating and sharing content on social networks in order to achieve marketing and branding goals. Social media marketing is becoming an increasingly popular form of digital marketing, with companies of all sizes and from all industries taking advantage of its reach.The main purpose of social media marketing is to create content that users will share with their social networks, increasing the brand’s visibility and reach. This content can be anything from blog posts, product reviews, and videos to images and interactive content. Companies use social media marketing to engage with their customers and build relationships with them.
      Social media marketing also helps companies to build loyalty and trust among their customers. By engaging with their customers and responding to their questions and comments, companies can show that they are listening to their customer’s needs and concerns. This helps to build trust and loyalty, which can lead to increased sales and customer loyalty.</p>
      <p className=" mt-6 text-justify text-xl ">Social media marketing is the process of using social media platforms .It can also be used to increase brand awareness and engagement. Companies can use social media to create campaigns and promotions that will be seen by a large number of potential customers. This helps spread the word about the company and its products and services, driving more traffic to its website and increasing its sales.</p>
      
      </div>
      
      <h2 className=" mt-10 flex justify-center text-4xl font-bold font-opensas">Key Stategies of Social Media Marketing </h2>

      </div>
      <Cards head1=" Establish Your Goals" para1="It is important to have a sound social media marketing strategy in place in order to ensure the success of your business. In this section, we will discuss some key social media marketing strategies that can help you reach your marketing goals." head2="Analyze Your Audience" para2="Knowing who your target audience is and what they are interested in will help you create tailored content that will resonate with them. Understanding their age, gender, interests, and other demographics will help"  head3="Leverage Influencer" para3="Influencer marketing is a great way to reach a larger audience and build trust with potential customers. Identify influencers in your industry who have an engaged following and invite them to share your content." head4="Goals & establish KPI" para4="Social media strategy planning starts with your goals. Whether you want to expand your team, build a larger following or a more active community, taking the time to define your social goals is the first step to reaching them."/>
      <hr  className="w-[80%] mx-auto mt-12 h-1 flex items-center justify-center bg-slate-500"/>

      
     
      
    <div className=" my-10 flex justify-center items-center">
      <button className="bg-slate-900 text-white font-times font-semibold rounded-full hover:white hover:bg-slate-600 text-3xl py-4  px-4"> <Link  to="/contact">More Details</Link> </button>
      </div>
      <div className="absolute right-4 bottom-4">
      <Link to="/services/lead">
        <img src={forward} className="w-[48px]" alt="forward" />
      </Link>

      </div>
     
    </div>  
  )
}

export default SMM