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
              <h1 className="px-36 text-4xl font">Automotive
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
                        Automotive
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                      SAP EWM leverages Automated Guided Vehicles (AGVs) and Automated Storage and Retrieval Systems (AS/RS) automotive technologies to help organizations increase warehouse productivity, accuracy, and scalability, resulting in lower operating costs and higher customer satisfaction.</p> 
                 <p className="mt-5">
                  <span className="text-orange-500 font-bold"> Artihcus Global</span> offers comprehensive  <span className="text-orange-500 font-bold"> SAP EWM</span> solutions that optimize automotive warehouse operations. They provide end-to-end implementation, seamless integration with automated systems such as AGVs and AS/RS, and improved task and resource management to enhance labor efficiency.  <span className="text-orange-500 font-bold">Artihcus</span>
                  delivers precise monitoring and enhanced operational performance by combining real-time inventory management, wave and yard management, and data-driven decision-making capabilities. The company also offers customization, scalability, training, and ongoing support to meet specific business requirements while ensuring compliance and security, resulting in increased productivity and cost savings.
                      </p>
                     
                    </div>
                
            
            
                  </div>


                     <div className="px-36 py-12 lg:flex lg:space-x-8">
                         
                          {/* Right Content */}
                  
                  
                          <div className="flex-1 relative justify-center max-w-xl">
                            <h2 className="text-orange-500 text-3xl font-bold mb-4">
                              <span className="text-green-300 mr-2 text-5xl">:</span>
                              Benefits of SAP EWM for the Automotive industry
                            </h2>
                            <div className="text-gray-600 font-medium mt-5">
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Improved Operational Efficiency
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Increased Customer Satisfaction
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Data-Driven Decisions
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Effective Employee Management
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Regulatory Compliance
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

                        <div>
                        <div className="flex-1 px-36 mb-10 relative justify-center ">
                            <h2 className="text-orange-500 text-3xl font-bold mb-4">
                              <span className="text-green-300 mr-2 text-5xl">:</span>
                              Challenges Facing in Automation
                            </h2>
                            <div className=" text-xl mt-5">
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              High Initial Costs
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Integration with Existing Systems
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Complexity of Implementation
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Workforce Resistance and Training
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Data Management and Accuracy
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Scalability and Flexibility
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Maintenance and Downtime
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Security Concerns
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Adapting to Rapid Technological Changes
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Regulatory Compliance
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Customization and Specific Requirements
                            </li>
                          </ul>
                        </div>
                  
                          </div>
                        </div>
    </div>
  );
}

export default Manufacturing;
