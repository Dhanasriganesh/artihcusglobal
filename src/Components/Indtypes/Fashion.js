import React, { useState } from "react";
import retail_banner from "../images/retail_banner.jpg"
import retail from "../images/retail.jpg"
import why_retail from "../images/why-retail.jpg"
import distribution from "../images/distribution.jpg"
import factory from "../images/picking-area.jpg"
import simplified from "../images/simplified.jpg"
function Fashion() {

  const [activeTab, setActiveTab] = useState("inbound");

  const tabs = {
    inbound: {
      title: "Coordinating Inbound",
      content:
        "The retail store is core for multiple inbound scenarios, mainly from vendors and distribution centers. Implementing SAP EWM in the retail industry in the same SAP landscape, the operators can easily process the goods receipts and proceed with the put-away process without any additional repacking or relabeling activities. Upon the receipt of the packages prepared in the distribution centers, EWM can direct the goods straight from the goods receipt area to the good issue zone to fulfill supply demand.",
      image: distribution, // Replace with actual image path
    },
    pickingArea: {
      title: "Managing the Picking Area",
      content:
        "Picking is a crucial warehouse operation, and managing the picking area ensures that orders are fulfilled efficiently. SAP EWM provides advanced functionalities to allocate and optimize picking routes, reduce travel times, and ensure accuracy in order fulfillment.",
      image: factory, // Replace with actual image path
    },
    pickingProcess: {
      title: "Simplifying the Picking Process",
      content:
        "Simplifying the picking process involves streamlining operations using advanced tools and processes. SAP EWM supports real-time inventory tracking and guided picking operations, enabling a faster and more reliable order fulfillment process.",
      image: simplified, // Replace with actual image path
    },
  };
  return (
    <div className="">
      {/* Section 1: Manufacturing Header */}
      <div
        className="text-white py-20"
        style={{
          backgroundImage: `url(${retail_banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="px-36 text-4xl font">Fashion & Retail</h1>
        <h1 className="px-36">Leveraging technology to enable the next
          generation of fashion and retail automation and <span className="flex ">
            management systems. Reimagine operational processes and
            services, and reinvent the </span>supply chain and value chain.</h1>
      </div>

      {/* Section 2: Manufacturing Content */}
      <div className="px-36 py-12 lg:flex lg:space-x-8">
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={retail}
            alt="Manufacturing Factory"
            className="w-96"
          />
        </div>
        {/* Right Content */}


        <div className="flex-1 relative justify-center max-w-xl">
          <h2 className="text-orange-500 text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-5xl">:</span>
            Automation Solutions for Retail
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We offer the right <span className="text-orange-500 font-bold">SCM (Supply Chain Management)</span> solutions and designs for digitalization, providing secure and innovative solutions. We help you enhance the consumer experience in fashion and retail by streamlining on-the-go transactions, accelerating and simplifying the outbound process, and improving inventory management, online orders, and delivery.
            <span className="text-orange-500 font-bold">SAP EWM (Extended Warehouse Management)</span> supports warehouse management, while
            <span className="text-orange-500 font-bold"> SAP BTP</span> solutions empower
            mobile and handheld devices for seamless operations.

          </p>
          <p className="text-justify mt-12"> The insights and customer wins from <span className="text-orange-500 font-bold">SAP EWM</span> are being incorporated into our future enterprise solutions, enhancing
            <span className="text-orange-500 font-bold">SCM software systems</span> and supporting digital transformation initiatives to deliver success.</p>
        </div>


      </div>

      {/* Section 3: Challenges Faced */}
      <div className="px-36 py-12 lg:flex lg:space-x-8">
        {/* Right Content */}


        <div className="flex-1 relative justify-center max-w-xl">
          <h2 className="text-orange-500 text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-5xl">:</span>
            Why retailers need new technology
          </h2>
          <p className="text-gray-600 leading-relaxed">
            In a typical large fashion and retail store, multiple partners interact, receiving goods from distribution centers and vendors, and managing returns from customers. These activities include picking and shipping for B2B, B2C, e-commerce, and Click and Collect orders. Ensuring goods are available quickly for customers is the primary challenge faced by store managers. By introducing solutions supported by
            <span className="text-orange-500"> SAP EWM</span> and
            <span className="text-orange-500"> SAP BTP</span> into fashion and retail warehousing, which integrate across their complex supply chain, retailers can overcome these challenges. This integration ensures that
            large retailers can respond to customer demands,
            maintain stock availability, and have the
            resources in place to fulfill timely deliveries at a lower cost.

          </p>
        </div>
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={why_retail}
            alt="Manufacturing Factory"
            className="w-9/12 h-60 mt-9"
          />
        </div>
      </div>

      {/* Section 4: Offerings */}
      <div className="px-36 py-12 lg:flex lg:space-x-8">
        {/* Right Content */}


        <div className="flex-1 relative justify-center max-w-xl">
          <h2 className="text-orange-500 text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-5xl">:</span>
            How SAP EWM resolves 3 <span className="">challenges</span> facing by retailers <span className="">with </span>Warehousing Management
          </h2>

        </div>
        {/* Left Image */}
        <div className="flex mt-6 justify-center lg:w-1/2">
          <p>
            Retail companies have started diversifying the processes for their stores, trying to boost the transportation and the logistics operation to obtain faster deliveries.</p>
        </div>
      </div>


      {/*Section-5*/}
      <div className="flex space-x-4 justify-center mb-6">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === key
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {tabs[key].title}
          </button>
        ))}
      </div>
      <div className="px-36 py-12 lg:flex lg:space-x-8">


        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-gray-700 text-justify lg:pr-6">
            <h3 className="text-xl font-bold text-black mb-4">
              {tabs[activeTab].title}
            </h3>
            <p>{tabs[activeTab].content}</p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Fashion;
