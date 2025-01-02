import React from 'react';
import Cards from '../HomeComponents/Card/Cards';
import Footer from '../Footer/Footer';
import { ReactTyped as Typed } from 'react-typed';
import Banner from '../images/bannerr.jpg';
import Services from '../HomeComponents/Services/Services';
import Contacthome from '../HomeComponents/ContactHome/Contacthome';
import Testimonial from '../HomeComponents/Testimonial/Testimonial';
import Leadership from "../HomeComponents/Leadership/Leadership";
import Vision from "../HomeComponents/Vision/Vision";
 import IndustryCards from '../HomeComponents/IndustryCards/IndustryCards';
import Clients from '../HomeComponents/Clients/Clients';
 function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center min-h-[calc(75vh-64px)] bg-opacity-10"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/10" />
 
        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 py-12">
          <div className="max-w-4xl space-y-4 md:space-y-6">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
              We transform your business into
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Technology driven solution
            </p>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex flex-wrap items-center gap-2">
              That improve{' '}
              <span className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
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
      </div>
 
      {/* Cards Section */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Cards />
        </div>
      </section>
 
      {/* Services Section */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Services />
        </div>
      </section>
      <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <IndustryCards />
        </div>
      </section>
 
      {/* Vision Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Vision />
        </div>
      </section>
 
      {/* Leadership Section */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Leadership />
        </div>
      </section>
 
      {/* Testimonial Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Testimonial />
        </div>
      </section>
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Clients />
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Contacthome />
        </div>
      </section>
 
    
    </div>
  );
}
 
export default Home;