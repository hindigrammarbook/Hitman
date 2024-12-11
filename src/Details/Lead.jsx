import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../components/Heading'


const Lead = () => {
  return (
    <div className='mt-40'>
      <Heading text="Lead Generation"/>
      <div className="mt-10 mx-16 ">
        <p className="text-justify text-xl font-thin">Lead generation in digital marketing refers to the process of attracting and converting potential customers (leads) into individuals or organizations who have expressed interest in your product or service. It is a critical step in the sales funnel, aiming to gather contact details from potential customers for further engagement and nurturing.</p>
        <h3  className="mt-10  text-2xl font-geologica" >Key Components of Lead Generation</h3>
        <p className="  mt-6 text-justify text-xl font-thin"><span className="font-bold">Lead:</span>A person or organization showing interest in your product or service by providing contact information such as an email address, phone number, or completing an action like downloading an eBook.</p>
        <p className="  mt-6 text-justify text-xl font-thin"><span className="font-bold">Lead Magnet</span>
        A valuable offer or resource that encourages potential leads to share their contact information (e.g., free guides, webinars, discounts).</p>
        <p className="  mt-6 text-justify text-xl font-thin"><span className="font-bold">Landing Pages</span>Dedicated pages designed to capture lead information in exchange for an offer. These pages typically include a form and persuasive content.</p>
        <p className="  mt-6 text-justify text-xl font-thin"><span className="font-bold">Lead Nurturing</span>The process of building relationships with leads through email campaigns, content marketing, and other personalized interactions to move them down the sales funnel.</p>

        </div>
        <div className=" my-10 flex justify-center items-center">
      <button className="bg-slate-900 text-white font-times font-semibold rounded-full hover:text-slate-900 hover:bg-opacity-40  text-3xl py-4  px-4"> <Link  to="/contact">More Details</Link> </button>
      </div>
      
    </div>
  )
}

export default Lead