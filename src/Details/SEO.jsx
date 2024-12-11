import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../components/Heading'
const SEO = () => {
  return (
    <div className='mt-40'>
      <Heading text="Search Engine Optimization"/>
      <div className="mt-10 mx-16 ">
        <p className="text-justify text-xl font-thin">SEO stands for Search Engine Optimization and helps search engines understand your website’s content and connect it with users by delivering relevant, valuable results based on their search queries.

The goal of SEO is to rank on the first page of search engine results pages (SERPs) for the most relevant and valuable keywords to your target demographic, driving qualified traffic to your site.

SEO is considered a digital marketing practice and can be applied to any website. It helps improve a site’s visibility on search engines like Google and Microsoft Bing. Whether your site promotes products, offers services, or shares expert knowledge on a specific topic, SEO can help drive traffic and increase online visibility.
      </p>

     <h3 className=" mt-10  text-2xl font-geologica" >Why is SEO important</h3>
     <p className="  mt-6 text-justify text-xl font-thin">
     SEO drives real business results for brands, businesses and organizations of all sizes. This is because the act of searching, or the search user interface (be it a typed, voiced or image query format) has become second nature for internet users worldwide, as the primary way to access the information sought, within the sea of billions of webpages (4.3 billion pages on the indexed web, as of September 2024).

      Whenever people want to go somewhere, do something, find information, research or buy a product/service – their journey typically begins with a search.

      However, search is incredibly fragmented – particularly for consumer-intent activities. Users may search on traditional web search engines (e.g., Google, Microsoft Bing), social platforms (e.g., YouTube, TikTok) or retailer websites (e.g., Amazon).
     </p>

     <h3 className=" mt-10  text-2xl font-geologica">Benefits</h3>
     <p className="  mt-6 text-justify text-xl font-thin">Another reason SEO is critical for brands and businesses: unlike other marketing channels, good SEO work is sustainable. When a paid campaign ends, so does the traffic. Traffic from social media traffic is at best unreliable – and a fraction of what it once was.

SEO is the foundation of holistic marketing, where everything your company does matters. Once you understand what your users want, you can then implement that knowledge across your:

Campaigns (paid and organic).
Website content.
Social media properties.</p>
      <div className=" my-10 flex justify-center items-center">
      <button className="bg-slate-900 text-white font-times font-semibold rounded-full hover:text-slate-900 hover:bg-opacity-40  text-3xl py-4  px-4"> <Link  to="/contact">More Details</Link> </button>
      </div>
      
    </div>
    </div>
  )
}


export default SEO