import React from 'react';
import Cards from '../HomeComponents/Card/Cards';
import Footer from '../Footer/Footer';
import { ReactTyped as Typed } from 'react-typed';
import Banner from '../images/bannerr.jpg';
import Services from '../HomeComponents/Services/Services'; // Import the Services component
import Contacthome from '../HomeComponents/ContactHome/Contacthome';
import Testimonial  from '../HomeComponents/Testimonial/Testimonial';
import Leadership from "../HomeComponents/Leadership/Leadership"
import Vision from "../HomeComponents/Vision/Vision"

function Home() {
  return (
    <div
      className="w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Banner})`, height: 'calc(75vh - 64px)' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30" />
 
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-36">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            We transform your business into
          </h1>
 
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Technology driven solution
          </p>
 
          <div className="text-xl sm:text-2xl font-bold text-white flex items-center">
            That improve{' '}
            <span className="ml-2 text-orange-500 text-3xl sm:text-4xl md:text-5xl">
              <Typed
                strings={[
                  'Sustainability',
                  'Cutting Cost',
                  'Quality',
                  'Track-And-Trace',
                  'Operations',
                  'Production',
                  'Visibility And Control',
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </span>
          </div>
        </div>
      </div>
      <div className='bg-white py-12'>
        <Cards />
      </div>
      <div className="bg-gray-50 py-12">
        <Services /> {/* Add the Services component here */}
      </div>
      <div>
        <Vision/>
      </div>
      <div>
        <Leadership/>
      </div>
      <div>
        <Testimonial/>
      </div>
      <div>
        <Contacthome/>
      </div>
     
      <Footer />
    </div>
  );
}
 
export default Home;