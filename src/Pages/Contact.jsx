import React from "react";


const ContactUs = () => {
  return (
    <div className="bg-sky-950 text-white mt-28 min-h-screen p-8">
      <div className="container mx-auto">
       
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-lg text-white mt-4 max-w-3xl mx-auto">
            At our digital marketing and web development agency, we specialize
            in driving success for your business in the digital world. Get in
            touch to learn how we can help.
          </p>
        </div>

       
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-center text-zinc-50 mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1  text-neutral-950 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SEO & Digital Marketing",
                description:
                  "Increase your online visibility and drive organic traffic with tailored SEO strategies.",
                icon: "🌐",
              },
              {
                title: "Web Design & Development",
                description:
                  "Build stunning, responsive websites that represent your brand's identity.",
                icon: "💻",
              },
              {
                title: "Social Media Management",
                description:
                  "Engage your audience and grow your social media presence with impactful campaigns.",
                icon: "📱",
              },
              {
                title: "Mobile & Desktop App Development",
                description:
                  "Create user-friendly apps tailored to your business needs.",
                icon: "📱",
              },
              {
                title: "Content Marketing",
                description:
                  "Craft compelling content that resonates with your audience and drives conversions.",
                icon: "✍️",
              },
              {
                title: "E-commerce Solutions",
                description:
                  "Launch and grow your online store with our comprehensive e-commerce services.",
                icon: "🛒",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-r from-blue-100 to-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition transform hover:-translate-y-2"
              >
                <div className="text-5xl">{service.icon}</div>
                <h3 className="text-xl font-semibold text-darkblue-700 mt-4">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-4xl font-semibold text-darkblue-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-blue-700 mb-6">
              We’re here to help! Call, email, or fill out the form to schedule
              a consultation with us.
            </p>
            <div className="text-lg">
              <p className="mb-4">
                <span className="font-bold">Phone:</span>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-darkblue-600 hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:info@yourcompany.com"
                  className="text-darkblue-600 hover:underline"
                >
                  DMagency.com
                </a>
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Location</h3>
             
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2478632075195!2d77.2329750738308!3d28.502189489990773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a68f43efb9%3A0xa53d90a393b37a33!2sCambridge%20Public%20School!5e0!3m2!1sen!2sin!4v1733398332835!5m2!1sen!2sin" width="80%" height="300" className="border:0;" allowfullscreen=" " loading="lazy"></iframe>
              
            </div>  
          </div>
          
         

      
          <div >
            <h2 className="text-4xl font-semibold  mb-4">
              Contact Us
            </h2>
            <form className="bg-gradient-to-r  from-gray-50 to-slate-900 border-2 border-slate-950 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 p-2 w-full bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darkblue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="mt-1 p-2 w-full  bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darkblue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="mt-1 p-2 w-full h-[200px] bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darkblue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-950 text-white  text-xl rounded-md hover:bg-darkblue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
