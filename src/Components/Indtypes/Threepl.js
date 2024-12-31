import React, { useState } from "react";
import retail_banner from "../images/3pl-banner2.jpg";
import retail from "../images/world.jpg";
import why_retail from "../images/carrier.jpg";
import distribution from "../images/distribution.jpg";
import factory from "../images/picking-area.jpg";
import simplified from "../images/simplified.jpg";
import car from "../images/3d.jpg";
import deployment from "../images/deployment.jpg";
import ln from "../images/ln.jpg";
import frc from "../images/frc.jpg";
import oe from "../images/oe.jpg";
import sco from "../images/sco.jpg";
import sas from "../images/sas.jpg";
import rmd from "../images/rsm.jpg";

function Fashion() {
  const [activeTab, setActiveTab] = useState("inbound");

  const tabs = {
    inbound: {
      title: "Coordinating Inbound",
      content:
        "The retail store is core for multiple inbound scenarios, mainly from vendors and distribution centers. Implementing of SAP EWM in the retail Industry in the same SAP landscape, the operators can easily process the goods receipts and proceed with the put-away process without any additional repacking or relabeling activities. Upon the receipt of the packages prepared in the distribution centers, EWM can direct the goods straight from the goods receipt area to the good issue zone to fulfill supply demand.It is important for vendors to deliver to shops prior to the opening hours to solve this challenge, Dock Appointment Scheduling in EWM supports the ability to fix delivery hours for each vendor. Store Managers can therefore improve inbound planning so as to allocate the required resources to support the unloading and put-away activities.In case distribution warehouses are having to support customer returns, moving this operation into the EWM, improves the overall operation, customer experience and overall operating costs. Any stock discrepancy occurs at the receipt of goods into the store, it will be easier to book the difference against the carrier or the issuing distribution center by using the appropriate exception codes.",
      image: distribution, // Replace with actual image path
    },
    pickingArea: {
      title: "Managing the Picking Area",
      content:
        "Managing the picking area in EWM offers first, the opportunity to run the replenishment process to make stock available for the customers and secondly, to harmonize the logistics execution across all the store areas. The replenishment process can be automatically triggered based on min/max quantity, or including the customer demand (e-comm etc.), as well as manually by any store operator after a visual check of the picking locations.",
      image: factory, // Replace with actual image path
    },
    pickingProcess: {
      title: "Simplifying the Picking Process",
      content:
        "Managing the picking location in EWM is to provide a more efficient way of picking & packing e-comm orders using the “Pick by Cart and Packing” Fiori Apps.SAP S/4 HANA Retail with embedded EWM, the operators are prompted to adopt those new logistics processes in a more simplified way using the Fiori Launchpad to handle both retail and the logistics processes at the same time.",
      image: simplified, // Replace with actual image path
    },
  };
  const offerings = [
    {
      title: "Lean And Nimble",
      description:
        "Helping retailers run efficiently, deliver flexibility, availability, and cost savings.",
      image: ln,
    },
    {
      title: "Future-Ready Core",
      description:
        "Transforming the warehousing system to drive enterprise agility and deliver on growth promises.",
      image: frc,
    },
    {
      title: "Omnichannel Experiences",
      description:
        "Developing seamless customer experience across channels & providing personalized offers leveraging customer insights & Operational patterns",
      image: oe,
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Addressing the Supply chain disruption challenges through insights-driven forecasting, E2E visibility, optimization of logistics & warehousing network",
      image: sco,
    },
    {
      title: "SAP MFS Implementation & IoT Enablement",
      description:
        "Providing fully customized Material Flow Technology for Distribution Centres & IOT enablement without the need for an additional Warehouse Control Unit (WCU) or Warehouse Control System (WCS)",
      image: sas,
    },
    {
      title: "Retail-Specific Master Data",
      description:
        "Helping retailers to maintain retail-specific master data. Extended Warehouse Management (EWM) provides you with new fields that can be defined in EWM only in addition to SAP ERP Master Data",
      image: rmd,
    },
  ];

  return (
    <div>
      {/* Section 1: Manufacturing Header */}
      <div
        className="text-white py-20"
        style={{
          backgroundImage: `url(${retail_banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <h1 className="px-36 text-4xl font">3PL (Third Party Logistics)</h1>
        <h1 className="px-36">Welcome to the new era of e-commerce and Future-ready ecosystems. Implement innovative <span className="flex ">
        storage solutions into your 3PL logistics operations to increased productivity and quick order </span>fulfillment. Fulfill your customer expectations with our logistics Automation solutions.</h1>
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
              className="w-96 h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </div>





      {/* Section: 8 */}
      <div className="px-36 mb-20">
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-teal-400 mr-2">:</span>
          <span className="text-orange-500">We Offerings</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {offerings.map((offering, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={offering.image}
                alt={offering.title}
                className="w-16 h-16 mb-6"
              />
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {offering.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fashion;
