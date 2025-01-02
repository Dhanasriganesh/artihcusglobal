import React, { useState } from 'react';
import headerImage from '../images/header.jpg';
import ylImage from '../images/sap-yl.png';
 
function Yl() {
  const [activeInfoIndex, setActiveInfoIndex] = useState(null);
 
  // Function to handle accordion click
  const handlePlusButtonClick = (index, e) => {
    e.stopPropagation();
    setActiveInfoIndex(activeInfoIndex === index ? null : index);
  };
 
  // Accordion items with updated titles
  const accordionItems = [
    { title: 'Planning', info: 'In the planning process, all the known information is entered into the system. This data can come from SAP ERP or SAP TM with the standard integration. Some other data might be added that is more yard specific, for example, loading times at certain locations or maintenance times.' },
    { title: 'Check-In', info: 'After the planning is completed, the transportation unit arrives in the yard and needs to be registered. In SAP Yard Logistics, this is called the check-in process. In some cases, the check-in is done by employees on-site, by security staff, or by the drivers/captains themselves. For registration by the driver, terminals are often used. Those terminals are placed outside of the yard, and the drivers enter some basic information such as transportation identification numbers and vehicle license plates. In some cases, special devices such as pagers or smartphones are distributed for communication with the drivers. This helps to send instructions and commands to the vehicles. Once all that information is verified, the execution on the yard can start.' },
    { title: 'Execution', info: 'The truck has predefined steps to be done in the yard, and those steps are planned in the planning phase. In SAP Yard Logistics, those steps are called yard tasks. Each yard task has a planned and actual start and end time. Yard tasks have to be executed one after the other. For each step of the execution, commands can be sent to employees via SMS, web services, or email.' },
    { title: 'Check-Out', info: 'Once all the steps are completed, the driver is checked out after he returns his equipment and drives through the last checkpoint in the yard. The check-out process is important to track the vehicles that currently operate in the yard.' },
    { title: 'Yard Logistics Processes', info: 'Details about Yard Logistics Processes...' },
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
            <h2 className="text-2xl font-bold mt-6 text-white">SAP YL</h2>
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
                <span className="text-2xl font-bold text-orange-400 ml-60">SAP YL</span>
              </div>
            </div>
            <p className="leading-relaxed mt-4">
              SAP Yard Logistics helps you stay in control of your yard processes. SAP Yard Logistics covers various modes of transport such as trucks, rail, ships, and even aircraft. Whenever cargo is loaded from one transportation mode to another transportation mode (e.g. from a ship to trucks) or even between similar transportation modes (e.g. from a train wagon to another), the yard starts to play a key role.
            </p>
            <p className="leading-relaxed mt-4">
              A yard is a restricted (company) area with restricted access. To guarantee security, each vehicle needs to be registered. After registration, the transportation unit is routed on the yard and cargo unloading or loading is performed. After all those steps, the transportation unit leaves the yard and all the actions are tracked by the system.
            </p>
          </div>
 
          {/* Image Section with yl.jpg - Bigger and aligned to the right */}
          <div className="w-full lg:w-1/2 px-4 flex justify-end">
            <img
              src={ylImage} // Replace with your Yard Logistics image
              alt="Yard Logistics"
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
 
                {/* Info Content - Only shown when plus is clicked */}
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
 
export default Yl;