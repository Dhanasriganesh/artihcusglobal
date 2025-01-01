import React from "react";
import manufacturing from "../images/automotive.jpg"
import manufacturer from "../images/bcar.jpg"
import manufacturingg from "../images/auto.jpg"
function Manufacturing() {
  return (
    <div>
            <div
              className="text-white py-24"
              style={{
                backgroundImage: `url(${manufacturing})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 className="px-36 text-4xl font">Pharmaceutical
              </h1>
        
            </div>

             {/* Section 2: Manufacturing Content */}
                  <div className="px-36 py-12 lg:flex lg:space-x-8">
                    {/* Left Image */}
                    <div className="flex justify-center lg:w-1/2">
                      <img
                        src={manufacturingg}
                        alt="Manufacturing Factory"
                        className="w-5/6"
                      />
                    </div>
                    {/* Right Content */}
            
            
                    <div className="flex-1 relative justify-center max-w-xl">
                      <h2 className="text-orange-500 text-3xl font-bold mb-4">
                        <span className="text-green-300 mr-2 text-5xl">:</span>
                        Pharmaceutical
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                      SAP EWM (Extended Warehouse Management) in the pharmaceutical industry enables accurate and compliant warehouse management, which is essential when handling delicate items. It supports stringent standards and traceability requirements by providing real-time inventory visibility and precise tracking through RFID and barcode scanning. </p> 
                 <p className="mt-5">Artihcus Global has successfully implemented SAP EWM for pharmaceutical companies while adhering to pharmaceutical product serialization rules. These implementations included the integration of 
                  <span className="text-orange-500 font-bold"> SAP Advanced Track & Trace for Pharmaceuticals (ATTP)</span>  SAP EWM offers features like batch management and serial number management, which help in inventory identification. You can seamlessly integrate SAP EWM with SAP ATTP, which provides functions that ensure compliance with country-specific legal requirements for serialization, tracking and tracing, and regulatory reporting of pharmaceutical items.
                      </p>
                      <p className="mt-3">
                    For companies that rely heavily on Quality Management (QM) functionality, we specialize in incorporating EWM features such as inspection lot summary, pre-sampling in production, recurrent inspections, internal inspections, and partial lot choices.
                    </p>
                    </div>
                
            
            
                  </div>


                     <div className="px-36 py-12 lg:flex lg:space-x-8">
                         
                          {/* Right Content */}
                  
                  
                          <div className="flex-1 relative justify-center max-w-xl">
                            <h2 className="text-orange-500 text-3xl font-bold mb-4">
                              <span className="text-green-300 mr-2 text-5xl">:</span>
                              Benefits Of SAP EWM for Pharmaceutical Industry
                            </h2>
                            <div className="text-gray-600 font-medium mt-5">
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Compliance with Regulations
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Enhanced Traceability
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Improved Stock Accuracy
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Efficient Storage Management
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Streamlined Batch Release and Recall Processes
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Quality Management Integration
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Compliance with GMP (Good Manufacturing Practice) Requirements
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Sample Management
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Real-Time Monitoring and Reporting
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Seamless ERP Integration
                            </li>
                          </ul>
                        </div>
                  
                          </div>
                  
                   {/* Left Image */}
                   <div className="flex justify-center lg:w-1/2">
                            <img
                              src={manufacturer}
                              alt="Manufacturing Factory"
                              className="w-5/6"
                            />
                          </div>
                        </div>
    </div>
  );
}

export default Manufacturing;
