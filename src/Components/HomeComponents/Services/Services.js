import React, { useState } from 'react';
 
 
const SAPCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-8 max-w-sm flex flex-col items-center text-center relative">
      <div className="absolute inset-0 rounded-lg border border-orange-500/30"></div>
      <div className="w-16 h-16 mb-6 text-orange-500">
        {icon ? (
          <img src={icon} alt={`${title} Icon`} className="w-full h-full" />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M3 8l9-5 9 5v8l-9 5-9-5V8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 8l9 5 9-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-300 mb-8">{description}</p>
      <button
        className="px-6 py-2 rounded-md transition-colors duration-300
          bg-transparent text-orange-500 border border-orange-500
          hover:bg-white hover:text-gray-900 hover:border-white
          active:bg-gray-100"
      >
        View More
      </button>
    </div>
  );
};
 
const Services = () => {
  const sapServices = [
    { title: "SAP Implementation", description: "Deploy SAP to streamline processes, enhance efficiency, train users, and ensure success.", icon: null },
    { title: "SAP Rollouts", description: "Standardize processes, ensure data consistency, and integrate operations across locations.", icon: null },
    { title: "SAP Support", description: "Ensure smooth operations, resolve issues, and optimize system performance with SAP support.", icon: null },
    { title: "SAP Upgrades", description: "Upgrade SAP systems to enhance capabilities and leverage the latest technological advancements.", icon: null },
    { title: "SAP Data Migration", description: "Ensure seamless transfer of data while maintaining accuracy and system integrity.", icon: null },
    { title: "SAP Customization", description: "Tailor SAP systems to align with unique business needs for maximum efficiency.", icon: null },
    { title: "AI Prediction Models", description: "Create intelligent systems to predict trends and outcomes for improved decision-making.", icon: null },
    { title: "AI Chatbots", description: "Integrate chatbots to enhance customer interaction with cutting-edge AI solutions.", icon: null },
    { title: "Web Applications", description: "Build scalable, feature-rich applications tailored to your business needs.", icon: null },
    { title: "Mobile Applications", description: "Develop robust mobile applications to expand your reach and drive engagement.", icon: null },
    { title: "E-commerce Platforms", description: "Create seamless e-commerce solutions with user-friendly designs and advanced functionality.", icon: null },
    { title: "Cloud Solutions", description: "Adopt cloud services for scalable, secure, and future-ready business operations.", icon: null },
  ];
 
  const [displayedCards, setDisplayedCards] = useState(sapServices); // Default is all SAP services.
  const [activeButton, setActiveButton] = useState('SAP'); // To manage which button is active
 
  // Handlers to update displayed cards based on the button clicked.
  const handleSAPServices = () => {
    setDisplayedCards(sapServices);
    setActiveButton('SAP');
  };
 
  const handleApplicationServices = () => {
    setDisplayedCards(sapServices.slice(8, 12)); // Displays 4 cards from index 8 to 11.
    setActiveButton('Application');
  };
 
  const handleArtificialIntelligence = () => {
    setDisplayedCards(sapServices.slice(6, 8)); // Displays 2 cards from index 6 to 7.
    setActiveButton('AI');
  };
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Automotive Header */}
     
 
      {/* SAP Cards Section */}
      <div className="relative bg-cover bg-center py-16" >
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services We Offer Content */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Services We Offer</h2>
            <p className="text-white text-lg mb-6">
              Modernize and automate your warehouse.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleSAPServices}
                className={`px-6 py-2 rounded-md text-white transition-colors duration-300 ${activeButton === 'SAP' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 text-gray-900 hover:bg-orange-500 hover:text-white'}`}
              >
                SAP Services
              </button>
              <button
                onClick={handleApplicationServices}
                className={`px-6 py-2 rounded-md transition-colors duration-300 ${activeButton === 'Application' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 text-gray-900 hover:bg-orange-500 hover:text-white'}`}
              >
                Application Services
              </button>
              <button
                onClick={handleArtificialIntelligence}
                className={`px-6 py-2 rounded-md transition-colors duration-300 ${activeButton === 'AI' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 text-gray-900 hover:bg-orange-500 hover:text-white'}`}
              >
                Artificial Intelligence
              </button>
            </div>
          </div>
 
          {/* SAP Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCards.map((service, index) => (
              <SAPCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Services;
