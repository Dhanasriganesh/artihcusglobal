import React from "react";
import manufacturing from "../images/manufacturingg.jpg"
import manufacturer from "../images/Manufacturer.jpg"
import manufacturingg from "../images/manufacturing.jpg"
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
              <h1 className="px-36 text-4xl font">Manufacturing
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
                        Manufacturing
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                      To adapt to the digital revolution and meet today’s market demands, industrial companies must create cutting-edge operational ecosystems and foster supplier collaboration. This involves developing intelligent solutions and platforms that reduce costs, enhance service capabilities, and deliver a consistent customer experience. 
                   <span className="text-orange-500 font-bold"> Artihcus Global</span> provides solutions that help manufacturers improve performance in various areas, including talent and supply chain management, process automation, quality control, and more.
            
                      </p>
                
                    </div>
            
            
                  </div>


                     <div className="px-36 py-12 lg:flex lg:space-x-8">
                         
                          {/* Right Content */}
                  
                  
                          <div className="flex-1 relative justify-center max-w-xl">
                            <h2 className="text-orange-500 text-3xl font-bold mb-4">
                              <span className="text-green-300 mr-2 text-5xl">:</span>
                              Challenges Faced by Manufacturer
                            </h2>
                            <div className="text-gray-600 font-medium mt-5">
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Achieving high efficiency in offshoring and reshoring supply chains
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Building resilience in the face of geopolitical, competitive, and regulatory uncertainty
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Realizing the full potential of technological innovation
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Managing increasing product and supply chain complexity
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Maximizing capacity and asset utilization
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                              Improving staff productivity, safety, efficiency, and satisfaction
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
