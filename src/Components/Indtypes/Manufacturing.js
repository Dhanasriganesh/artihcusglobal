import React from "react";
import manufacturing from "../images/manufacturing.jpg"
import manufacturer from "../images/Manufacturer.jpg"
function Manufacturing() {
  return (
    <div>
      {/* Section 1: Manufacturing Header */}
      <div className="bg-orange-500 text-white py-16">
        <h1 className="text-center text-4xl font-bold">Manufacturing</h1>
      </div>

      {/* Section 2: Manufacturing Content */}
      <div className="px-8 py-12 lg:flex lg:space-x-8">
        {/* Left Image */}
        <div className="lg:w-1/2">
          <img
            src={manufacturing}
            alt="Manufacturing Factory"
            className="rounded-md shadow-md w-96"
          />
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2">
          <h2 className="text-orange-500 text-3xl font-semibold mb-4">
            Manufacturing
          </h2>
          <p className="text-gray-700">
            To adapt to the digital revolution and meet today’s market demands,
            industrial companies must create cutting-edge operational
            ecosystems and foster supplier collaboration. This involves
            developing intelligent solutions and platforms that reduce costs,
            enhance service capabilities, and deliver a consistent customer
            experience.{" "}
            <span className="font-semibold text-gray-900">Arthicus Global</span>{" "}
            provides solutions that help manufacturers improve performance in
            various areas, including talent and supply chain management,
            process automation, quality control, and more.
          </p>
        </div>
      </div>

      {/* Section 3: Challenges Faced */}
      <div className="bg-gray-100 py-12 px-8">
        <h2 className="text-orange-500 text-3xl font-semibold mb-8">
          Challenges Faced by Manufacturer
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>• Achieving high efficiency in offshoring and reshoring supply chains</li>
          <li>
            • Building resilience in the face of geopolitical, competitive, and
            regulatory uncertainty
          </li>
          <li>• Realizing the full potential of technological innovation</li>
          <li>• Managing increasing product and supply chain complexity</li>
          <li>• Maximizing capacity and asset utilization</li>
          <li>• Improving staff productivity, safety, efficiency, and satisfaction</li>
        </ul>
        <div className="mt-8 flex justify-center">
          <img
            src={manufacturer}
            alt="Robotic Manufacturing"
            className="rounded-md shadow-md w-96"
          />
        </div>
      </div>

      {/* Section 4: Offerings */}
      <div className="py-12 px-8">
        <h2 className="text-orange-500 text-3xl font-semibold mb-8">
          We Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <img
              src="https://via.placeholder.com/80"
              alt="SAP Yard Logistics"
              className="mx-auto mb-4"
            />
            <h3 className="text-gray-900 font-semibold">SAP Yard Logistics</h3>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/80"
              alt="SAP Transportation Management"
              className="mx-auto mb-4"
            />
            <h3 className="text-gray-900 font-semibold">
              SAP Transportation Management
            </h3>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/80"
              alt="SAP Extended Warehouse Management"
              className="mx-auto mb-4"
            />
            <h3 className="text-gray-900 font-semibold">
              SAP Extended Warehouse Management (EWM)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manufacturing;
