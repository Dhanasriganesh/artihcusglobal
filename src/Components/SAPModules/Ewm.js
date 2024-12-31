import React from 'react';
import headerImage from '../images/header.jpg';
import sapEwmImage from '../images/sap-ewm.jpg';
 
function Ewm() {
  return (
    <>
      <section className="page-header relative">
        <div
          className="page-header-bg bg-cover bg-center bg-no-repeat h-[250px]"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="page-header__inner text-center py-8">
              <h2 className="text-2xl font-bold mt-4 text-white">SAP EWM</h2>
            </div>
          </div>
        </div>
      </section>
 
      <div className="container mx-auto pb-5 px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <span className="text-green-400 mr-2 text-3xl font-bold">:</span>
                <span className="section-title__tagline text-3xl font-bold text-orange-500">SAP EWM</span>
              </div>
            </div>
            <p className="mb-4">
              SAP Extended Warehouse Management (SAP EWM) forms part of SAP supply chain
              Management (SAP SCM) and provides end-to-end support for supply chain processes.
              SAP EWM brings together maximum functionality and comprehensive process support for
              all types of warehouses, making it one of the most powerful software suites for
              warehouse management and control worldwide.
            </p>
            <p className="mb-4">
              The principal components within SAP EWM include warehouse management (SAP Extended
              Warehouse Management) and material flow control (SAP Material Flow System).
            </p>
            <p>
              SAP EWM provides comprehensive functionality for warehouse processes, for which
              companies were previously forced to use specialized, standalone niche applications.
              An example of this functionality is offered by new distribution procedures, with which
              you can significantly reduce inventory costs while improving service quality.
            </p>
          </div>
 
          {/* Right Column with Image */}
          <div className="w-full lg:w-1/2 px-4">
            <img
              src={sapEwmImage}
              alt="SAP EWM"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Ewm;