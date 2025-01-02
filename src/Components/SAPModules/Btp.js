import React, { useState } from 'react';
import headerImage from '../images/header.jpg';
import btpImage from '../images/sap-btp.png';    
 
function Btp() {
  const [activeInfoIndex, setActiveInfoIndex] = useState(null);
 
  // Function to handle button click
  const handlePlusButtonClick = (index, e) => {
    e.stopPropagation();
    setActiveInfoIndex(activeInfoIndex === index ? null : index);
  };
 
  // Accordion items
  const accordionItems = [
    {
      title: 'Application Development and Automation',
      info: 'SAP BTP enables rapid application development with automation tools to streamline business processes and foster innovation.',
    },
    {
      title: 'Data and Analytics',
      info: 'Real-time data management and advanced analytics empower businesses to make informed decisions and gain actionable insights.',
    },
    {
      title: 'Integration',
      info: 'Seamlessly integrate SAP BTP with partner, supplier, and customer systems to enhance collaboration and streamline operations.',
    },
    {
      title: 'Extended Planning and Analysis',
      info: 'With extended planning and analysis, businesses can predict outcomes and optimize their strategic and operational planning.',
    },
    {
      title: 'Artificial Intelligence',
      info: 'AI-powered predictive analytics allow businesses to uncover trends, automate tasks, and improve decision-making.',
    },
  ];
 
  return (
    <>
      {/* Header Section */}
      <section className="relative">
        <div
          className="bg-cover bg-center bg-no-repeat h-[250px]"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mt-6 text-white">SAP BTP</h2>
            </div>
          </div>
        </div>
      </section>
 
      {/* Main Content Section */}
      <div className="container mx-auto pb-5 mt-8 px-4 sm:px-8 md:px-16 lg:px-36">
        <div className="flex flex-wrap">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-2">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="text-2xl font-bold text-orange-400 ml-60">SAP BTP</span>
              </div>
            </div>
            <p className="leading-relaxed mt-4">
              SAP BTP (Business Technology Platform) is a comprehensive, open, multi-cloud Platform-as-a-Service
              (PaaS) offering from SAP. It provides a wide range of technologies and services designed to support
              the development, integration, and extension of SAP applications and solutions. SAP BTP enables
              businesses to build, integrate, and operate applications and services more efficiently in the cloud.
            </p>
            <p className="leading-relaxed mt-4">
              SAP BTP empowers real-time data management, advanced analytics, seamless system integration, rapid
              development of custom solutions, and the creation of add-ons for existing systems. It uses AI-powered
              predictive analytics to go beyond available data, allowing businesses to make informed decisions
              based on projections. By seamlessly connecting SAP BTP with partner, supplier, and customer systems,
              collaboration is enhanced and operations are streamlined.
            </p>
            <p className="leading-relaxed mt-4">
              Automating processes helps reduce errors, speed up workflows, and free up resources for more strategic
              initiatives. SAP BTP’s development environment and tools allow businesses to expand systems, as well as
              install new or customized features and extensions tailored to specific business needs. Finally, SAP BTP
              provides fresh perspectives on existing solutions, fostering continuous improvement and helping
              businesses maintain their leadership position in the industry.
            </p>
          </div>
 
          {/* Image Section */}
          <div className="w-full lg:w-1/2 px-4 flex justify-end">
            <img
              src={btpImage}
              alt="Business Technology Platform"
              className="max-w-full sm:w-96 lg:w-[700px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
 
      {/* Accordion Section */}
      <div className="container mx-auto pb-5">
        <div className="flex flex-wrap justify-center px-4 sm:px-8 md:px-16 lg:px-36">
          <div className="w-full lg:flex flex-col items-center">
            {accordionItems.map((item, index) => (
              <div key={index} className="mb-4 w-full">
                <div className="relative bg-orange-400 rounded-md shadow-lg w-full sm:w-[350px] lg:w-[800px]">
                  {/* Static Box (Heading) */}
                  <div className="px-8 py-6 text-white text-m">{item.title}</div>
 
                  {/* Plus/Minus Symbol */}
                  <span
                    onClick={(e) => handlePlusButtonClick(index, e)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl cursor-pointer"
                  >
                    {activeInfoIndex === index ? '−' : '+'}
                  </span>
                </div>
 
                {/* Info Content - Only shown when button is clicked */}
                {activeInfoIndex === index && (
                  <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow w-full sm:w-[350px] lg:w-[800px]">
                    <p className="text-sm">{item.info}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Btp;