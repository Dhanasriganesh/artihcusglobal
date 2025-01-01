import React, { useState } from "react";
import retail_banner from "../images/3pl-banner2.jpg";
import retail from "../images/world.jpg";
import why_retail from "../images/carrier.jpg";
import distribution from "../images/3pl-staffing.jpg";
import factory from "../images/Warehouse-Capacity.jpg";
import simplified from "../images/3pl-rm.jpg";
import scalable from "../images/scalable.jpg"
import infra from "../images/infra.jpg"
import multi from "../images/multi.jpg"
import car from "../images/change.jpg";
import ln from "../images/ln.jpg";
import frc from "../images/frc.jpg";
import oe from "../images/oe.jpg";
import sco from "../images/sco.jpg";
import sas from "../images/sas.jpg";
import rmd from "../images/rsm.jpg";
import flowchart from "../images/flowchart.jpg"
import smarter from "../images/smarter.jpg"
import agility from "../images/Agility.jpg"
function Fashion() {
  const [activeTab, setActiveTab] = useState("inbound");

  const tabs = {
    inbound: {
      title: "Workforce issues",
      content:
        "One of the most significant 3PL challenges is staffing. Attracting and maintaining top talent is one of the biggest issues today. 3PL providers, therefore, are under increasing pressure to invest in automation and, at the same time, must realise a quick return of investment.",
      image: distribution, // Replace with actual image path
    },
    pickingArea: {
      title: "Warehouse Capacity/Storage space",
      content:
        "One of the side effects of exponential e-commerce growth is that 3PL providers run out of space. Although real estate prices are not cheap, a 3PL that fails to offer adequate capacity risks damaging its reputation.",
      image: factory, // Replace with actual image path
    },
    pickingProcess: {
      title: "Returns management",
      content:
        "Returns in the fashion industry are the highest of all consumer returns (40-60 percent of all items purchased online are returned), putting a significant and labor-intensive demand on the 3PL provider. There are two models for returns and the setup will depend on the service level agreed with the customer – next-day, or 2-3 day delivery – and how it impacts the returns management solution.",
      image: simplified, // Replace with actual image path
    },
    picking: {
      title: "Changing order profiles",
      content:
        "The systems employed by 3PL providers are typically designed for an order profile. Changes in the order structure profile can cause detrimental performance effects and this is challenging in conditions where the number of items per order for retail and e-commerce change all the time.",
      image: car, // Replace with actual image path
    },
    pick: {
      title: "Multi-user capability",
      content:
        "3PLs need to be able to serve more than one customer on the same system. Their WMS must be able to manage multiple customers for inventory, invoicing, handling and so on at the same time, whether the customer is in clothing or household appliances.",
      image: multi, // Replace with actual image path
    },
    scale: {
      title: "Scalability",
      content:
        "Adapting to client growth is a part of the business and scalability is a big challenge for 3PLs moving forward. 3PLs must be able to scale up and down to match the size of the 3PL operation.",
      image: scalable, // Replace with actual image path
    },
    lack: {
      title: "Lack of Infrastructure",
      content:
        "This is a major challenge for 3PL companies in most of the developing countries of the world. Some of the problems faced may include bad road conditions, poor connectivity, inadequate air and sea port capacities and lack of developed modes of transports such as railways, roadways and inland water transport system.",
      image: infra, // Replace with actual image path
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
            Enterprise Solutions for 3PL
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We offer competitive SCM solutions with better digitalization to maximize space utilization and simplify 3PL Operations. We help you to improve your 3PL partner experience, on-the-go transactions that speed up and simplify the Inbound & Outbound process as well as inventory management and delivery using SAP EWM (Extended Warehouse Management) with Smart Storage Solutions. <span className="text-orange-500 font-bold">RF framework</span> support and
            <span className="text-orange-500 font-bold">SAP EWM (Extended Warehouse Management)</span> supports warehouse management, while
            <span className="text-orange-500 font-bold"> SAP BTP solutions</span> for Mobile and hand-held devices.

          </p>
          <p className="text-justify mt-12">The SAP EWM (Extended Warehouse Management) customer wins learned and gathered are being incorporated in our future Enterprise solutions with
            <span className="text-orange-500 font-bold">SCM software systems</span> and their digital transformation initiatives to bring success into the deliverables.</p>
        </div>


      </div>

      {/* Section 3: Challenges Faced */}
      <div className="px-36 py-12 lg:flex lg:space-x-8">
        {/* Right Content */}


        <div className="flex-1 relative justify-center max-w-xl">
          <h2 className="text-orange-500 text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-5xl">:</span>
            Why 3PL need to adapt new technologies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            3PL providers are embracing
            <span className="text-orange-500"> new technology</span> to meet Challenges with
            <span className="text-orange-500"> flexibility, agility, and adaptation</span> in the quickly expanding industry.
          </p>
          <p className="mt-14">
            particularly heightened demand in online sales may sound like business development opportunities for 3PLs. However, if they fail to provide the service that matches industry fulfilment standards, 3PLs run the risk of losing customers. To prevent this and avert competition, 3PLs need solutions that provide flexible and adaptive responses. If they invest in
            <span className="text-orange-500">automation</span> at an early stage, their ability to grow, serve more brands and handle a higher volume of goods will sustain the investment.
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
            Challenges faced by 3PL companies
          </h2>

        </div>
        {/* Left Image */}
        <div className="flex mt-6 justify-center lg:w-1/2">
          <p>
            Third-party logistics revenue has been increasing at a rate which is double to the existing. At the same time, behind all this growth, there are quite a few challenges facing the 3PL and distribution industry.</p>
          <p className="mt-14">In spite of the massive growth of the 3PL industry, 3PL companies face several challenges while serving customers across the globe. Some of them are listed here.</p>
        </div>
      </div>


      {/*Section-5*/}
      <div className="flex space-x-4 justify-center mb-6">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === key
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


      <div className="flex flex-col justify-center items-center sm:justify-center">
        <h2 className="text-orange-500 text-3xl font-bold mb-4">
          <span className="text-green-300 mr-2 text-5xl">:</span>
          Top challenges faced by third-party logistics service providers worldwide in 2022
        </h2>
        <div>
          <img src={flowchart} width={800} height={400} className="rounded-md shadow-2xl shadow-black m-4" />
        </div>
      </div>





      <div className="px-36 py-12 lg:flex lg:space-x-8">
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={smarter}
            alt="Manufacturing Factory"
            className="w-5/6"
          />
        </div>
        {/* Right Content */}


        <div className="flex-1 relative justify-center max-w-xl">
          <h2 className="text-orange-500 text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-5xl">:</span>
            Overcome 3PL challenges with Smarter & Future ready technology
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Artihcus digital transformation solutions can help improve operational efficiency and provides benefits of digitalization such as increased throughput, boosted productivity, and reduced operational costs. Manual storage systems are also more easily scaled, so if the business is rapidly growing, it’s less expensive to add or reconfigure storage solutions to promote the growth. 3PL providers can overcome the challenges by leveraging the Technology solutions from Artihcus. Artihcus will transform the logistics by leveraging the principles of Enterprise in the below</p>
        </div>


      </div>


      <div className="flex justify-center">
<div>
  <img src={agility} width={100} height={10}/>
  Agility
</div>

      </div>



      <div className="flex flex-col items-center bg-gray-200 py-10">
      {/* Heading Section */}
      <h2 className="text-orange-500 text-3xl font-bold mb-8 text-center">
        <span className="text-green-300 mr-2 text-5xl">:</span>
        Key Trends in 3PL Operations
      </h2>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 px-6">
        {/* Card 1 */}
        <div className="bg-black text-white p-6 rounded-3xl shadow-lg w-80 text-center transition transform hover:scale-105 hover:shadow-xl">
          <p>
            Automation of workflow using technology will bring 3PL companies closer to their clients
            through greater collaboration electronically.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-black text-white p-6 rounded-3xl shadow-lg w-80 text-center transition transform hover:scale-105 hover:shadow-xl">
          <p>
            Smarter, dedicated 3PL technology will address inefficiencies, save time, and improve ROI
            through dedicated transport management systems, warehouse management systems, freight
            tracking, and customer service.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-black text-white p-6 rounded-3xl shadow-lg w-80 text-center transition transform hover:scale-105 hover:shadow-xl">
          <p>
            IoT and mobile applications will focus on flexibility and replace paper records, delivering
            processing orders and sales fulfillment seamlessly regardless of geographical location.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-black text-white p-6 rounded-3xl shadow-lg w-80 text-center transition transform hover:scale-105 hover:shadow-xl">
          <p>
            Data analytics of ongoing and historical information will provide greater insight into
            building predictive business models for the future.
          </p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Fashion;
