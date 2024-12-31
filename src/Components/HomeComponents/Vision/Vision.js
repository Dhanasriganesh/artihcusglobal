import React from 'react';
import Vision1 from '../../images/vision-1.gif';
const Vision = () => {
  return (
    <div className="h-[80vh] bg-black"> {/* Set the height to 70% of the viewport height */}
 
      <div className="container mx-auto px-2 py-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content Column */}
          <div className="space-y-8">
            {/* Title Section */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-orange-500"></div>
              <h1 className="text-4xl font-bold text-orange-500">Our Vision</h1>
            </div>
 
            {/* Subtitle */}
            <h2 className="text-3xl font-bold text-white">
              Digitalize & Automate Everything Better
            </h2>
 
            {/* Paragraphs */}
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                We collaborate and create digitalize solutions to maximize business value for our
                customers.Our end-to-end suite of services enable our customers to operate
                profitably.
              </p>
 
              <p className="text-lg">
                Artihcus is on a quest to maximize our customers digital and automation journey with
                innovative solutions. We are a high-growth company committed to customer success
                throughout the lifecycle of our partnership. We combine technology, services and
                execution expertise to assist our customers to extract the full potential and value out of
                the platform and become a thriving organization in the future.
              </p>
            </div>
          </div>
 
          {/* Image Column */}
          <div className="relative h-[500px] w-full ml-auto rounded-2xl overflow-hidden">
            <img
              src={Vision1}  // Replace with your actual gif path
              alt="Night sky animation"
              className="w-full h-full  object-cover  rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Vision;