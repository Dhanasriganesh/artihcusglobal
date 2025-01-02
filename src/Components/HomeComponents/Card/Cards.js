import React from "react";
import { Link } from "react-router-dom";
 
function Cards() {
  const cardData = [
    {
      icon: "SAP",
      title: "SAP EWM",
      description: "Our modern, flexible warehouse solution you can run agile operations with digitalised and accelerated...",
      button: "Learn More",
      link: "/sap-modules/sap-ewm",
    },
    {
      icon: "SAP",
      title: "SAP TM",
      description: "Our integrated transportation management solution enables you to gain the visibility and control...",
      button: "Learn More",
      link: "/sap-modules/sap-tm",
    },
    {
      icon: "SAP",
      title: "SAP MFS",
      description: "Our tailored solution with the built-in component SAP EWM MFS to meet individual requirements enables you...",
      button: "Learn More",
      link: "/sap-modules/sap-mfs",
    },
    {
      icon: "SAP",
      title: "SAP BTP",
      description: "Our expertise in SAP Business Technology Platform (SAP BTP) will bring enterprise data into business value, compose...",
      button: "Learn More",
      link: "/sap-modules/sap-btp",
    },
    {
      icon: "SAP",
      title: "SAP YL",
      description: "Leverage SAP Yard Logistics to streamline and optimize your yard operations...",
      button: "Learn More",
      link: "/sap-modules/sap-yl",
    },
  ];
 
  return (
    <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-12 lg:px-14 gap-x-12">
      {/* Left section for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3 lg:w-1/3">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-lg p-2 hover:shadow-lg hover:scale-105 transition-transform duration-300 w-58"
          >
            <div className="flex items-center justify-start space-x-4 mb-4">
              <div className="bg-white rounded-full p-2 text-black font-bold">
                {card.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <hr className="border-t border-gray-600 mb-4" />
            <p className="text-sm mb-6">{card.description}</p>
            <Link to={card.link}>
              <button className="bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                {card.button}
              </button>
            </Link>
          </div>
        ))}
      </div>
 
      {/* Right section for the text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center min-h-screen mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-orange-400 mb-4 text-center">Modules We Offer</h2>
        <p className="text-lg mb-6 text-center">
          We deliver excellence by hiring and partnering with the best in the business.
        </p>
      </div>
    </div>
  );
}
 
export default Cards;