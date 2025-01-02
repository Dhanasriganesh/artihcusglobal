import React, { useState } from 'react';
import headerImage from '../images/header.jpg';
import mfsImage from '../images/mfs 1.jpg';
 
function Mfs() {
  const [activeInfoIndex, setActiveInfoIndex] = useState(null);
 
  // Function to handle accordion click
  const handlePlusButtonClick = (index, e) => {
    e.stopPropagation();
    setActiveInfoIndex(activeInfoIndex === index ? null : index);
  };
 
  // Accordion items with updated titles
  const accordionItems = [
    { title: 'Conveyor Systems', info: 'Information about Conveyor Systems...' },
    { title: 'Small Parts AS/RS', info: 'Information about Small Parts AS/RS...' },
    { title: 'High-Bay Warehouse System', info: 'Information about High-Bay Warehouse System...' },
    { title: 'Shuttle Storage', info: 'Information about Shuttle Storage...' },
    { title: 'Multi-Deep Storage', info: 'Information about Multi-Deep Storage...' },
    { title: 'Automated Guided Vehicle Systems (AGVs)/Monorail Overhead Conveyors (MOCs)/In-Floor Conveyor Systems (IFCs)', info: 'Information about AGVs, MOCs, and IFCs...' },
    { title: 'Goods-to-Person', info: 'Information about Goods-to-Person...' },
    { title: 'Pick-By/To-Light', info: 'Information about Pick-By/To-Light...' },
  ];
 
  return (
    <>
      {/* Header Section */}
      <section className="relative">
        <div
          className="bg-cover bg-center bg-no-repeat h-[250px]"
          style={{ backgroundImage: `url(${headerImage})` }} // Corrected header image path
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mt-6 text-white">SAP MFS</h2>
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
                <span className="text-2xl font-bold text-orange-400 ml-60 ">SAP MFS</span>
              </div>
            </div>
            <p className="leading-relaxed mt-4">
              SAP Material Flow System is an integrated functional component within SAP EWM. SAP MFS is typically used for material flow control in automated warehouse systems (AS/RS for small parts, HBS), and deployed in demanding, highly-automated logistics centers.
            </p>
            <p className="leading-relaxed mt-4">
              SAP MFS provides comprehensive, performance-optimized control for highly-dynamic, fully-automated shuttle AS/RS systems, sorters, and sequencers. The deployment of SAP MFS results in a two-tier system architecture (SAP-PLC) with a maximum level of SAP integration and simple interfaces, making external middleware and subsystems, such as warehouse/material flow control system (WCS/MFC) surplus to requirements. This means lower operation costs, greater flexibility and transparency, and maximum protection for your investment.
            </p>
          </div>
 
          {/* Image Section with mfs.jpg - Bigger and aligned to the right */}
          <div className="w-full lg:w-1/2 px-4 flex justify-end">
            <img
              src={mfsImage} // Display the mfs.jpg image
              alt="MFS"
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
 
export default Mfs;