import React from 'react';
import headerImage from '../images/header.jpg';
import tmImage from '../images/sap-tm.png';
 
function Tm() {
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
              <h2 className="text-2xl font-bold mt-6 text-white">SAP TM</h2>
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
                <span className="text-2xl font-bold text-orange-400 ml-60">SAP TM</span>
              </div>
            </div>
            <p className="leading-relaxed mt-4">
              SAP offers you numerous possibilities to provide transport processes with efficient
              support. Through the SAP ERP possibilities of the LE-TRA, SAP provides the SAP
              Transportation Management (SAP TM).
            </p>
            <br />
            <p className="leading-relaxed mt-4">
              By using SAP TM, you efficiently support the improvement and automation of all
              processes relevant to transport, e.g., freight cost billing or transport planning and
              bidding. By integrating SAP EWM (SAP Extended Warehouse Management), the improvements
              are already made in your warehouse. There is no need for external transport
              management systems at all. Interfaces, dependencies, and costs will be significantly
              reduced.
            </p>
          </div>
 
          {/* Image Section with tm.jpg - Bigger and aligned to the right */}
          <div className="w-full lg:w-1/2 px-4 flex justify-end">
            <img
              src={tmImage} // Replace with your Transportation Management image
              alt="Transportation Management"
              className="max-w-full sm:w-96 lg:w-[700px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Tm;