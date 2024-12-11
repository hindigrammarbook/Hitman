import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../components/Heading'

const YouTube = () => {
  return (
    <div className='mt-40'>
    <Heading text="You Tube Marketing"/>
    <div className="mt-10 mx-16 ">
    <h3 className=" mt-10  text-2xl font-geologica">What is YouTube Marketing?</h3>
      <p className="text-justify mt-6 text-xl font-thin">YouTube marketing is the process of promoting your brand, product or service on YouTube. It involves a mix of various organic and paid approaches such as uploading your own videos or paying for YouTube ads. Additionally, brands may even include influencers in their YouTube marketing mix.
      YouTube is a great platform for watching videos on entertainment, learning, news and more. Almost everyone knows this, but how many of us know it as a perfect means to grow a business?

Online videos have been grabbing attention for quite some time now, and they have a significant influence on the digital audience. YouTube is the world’s 2nd largest popular website, right after Google, surely has a huge and diverse audience offering great opportunities for marketers. With billions of active users, YouTube certainly serves as a valuable and robust tool for digital marketing.
      </p>
      <h3 className=" mt-10  text-2xl font-geologica" >Why is YouTube an effective marketing tool?</h3>
      <p className=" mt-6 text-justify text-xl font-thin">Since YouTube’s 22.8 billion visits a month make it the second most visited site in the world after Google, it’s able to bring many benefits to businesses nowadays. The platform isn’t just a famous entertaining channel but a powerful marketing tool, and companies can develop YouTube channels for advertising. YouTube channels help get more views from new geographics, promote a product or a company, build a large customer base, and increase a brand’s sales volume.

YouTube is also a famous educational platform. Companies can achieve greater exposure, which expands their customer base. By making detailed tutorials, live streams, guides, and lessons, brands can rank higher on Google. Running ads is another reason companies use the online video sharing platform since it helps brands reach a wider audience and obtain new customers. Moreover, it’s much cheaper than paid advertising on Facebook and Instagram.

Now that you know why YouTube is considered an effective marketing tool, it’s time to discover its main benefits.

</p>
<h3 className=" mt-10  text-2xl font-geologica">Benefits of YouTube Marketing
</h3>
<p  className=" mt-6 text-justify text-xl font-thin">The platform can serve as one of the most effective marketing channels. Optimizing keywords in titles and creating tutorials, commentary, product reviews, Q&A, and video listicles allow businesses to achieve higher exposure and reach new audiences. Brands can’t predict who and when will access their videos. If the content contains the necessary keywords in the title and description, all people who look for information might stumble upon a certain video, stay on the channel, and buy the product it advertises. Besides, adding watermarks and company logos to videos enables businesses to improve brand awareness.

Videos show in Google search results and provide companies with more visibility and an opportunity to bring more prospects. After exploring your content on YouTube, leads might visit your website to learn more about your products. Your videos will stay on the video-sharing platform as long as they comply with its guidelines and policies.

Since YouTube is an international company, it empowers brands worldwide to reach new geographies. The platform helps attract leads from different countries who speak the same language.</p>
    </div>
    <div className=" my-10 flex justify-center items-center">
      <button className="bg-slate-900 text-white font-times font-semibold rounded-full hover:text-slate-900 hover:bg-opacity-40  text-3xl py-4  px-4"> <Link  to="/contact">More Details</Link> </button>
      </div>
    
    </div>
  )
}

export default YouTube