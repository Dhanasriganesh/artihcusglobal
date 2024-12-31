import React from 'react';
import Vision1 from '../../images/vision-1.gif';
 
const Vision = () => {
  return (
    <div className="min-h-screen lg:min-h-[80vh] bg-black py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Title Section */}
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-orange-500"></div>
              <h1 className="text-3xl lg:text-4xl font-bold text-orange-500">
                Our Vision
              </h1>
            </div>
 
            {/* Subtitle */}
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Digitalize & Automate Everything Better
            </h2>
 
            {/* Paragraphs */}
            <div className="space-y-4 lg:space-y-6 text-gray-300">
              <p className="text-base lg:text-lg">
                We collaborate and create digitalize solutions to maximize business value for our
                customers. Our end-to-end suite of services enable our customers to operate
                profitably.
              </p>
 
              <p className="text-base lg:text-lg">
                Artihcus is on a quest to maximize our customers digital and automation journey with
                innovative solutions. We are a high-growth company committed to customer success
                throughout the lifecycle of our partnership. We combine technology, services and
                execution expertise to assist our customers to extract the full potential and value out of
                the platform and become a thriving organization in the future.
              </p>
            </div>
          </div>
 
          {/* Image Column */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full mx-auto lg:ml-auto mt-8 lg:mt-0">
            <img
              src={Vision1}
              alt="Night sky animation"
              className="w-full h-full object-cover rounded-lg lg:rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Vision;