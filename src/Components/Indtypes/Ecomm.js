import React, { useState } from "react";
import retail_banner from "../images/ecom.jpg";
import retail from "../images/e-commercee.jpg";
import why_retail from "../images/commerce.jpg";

function Ecomm() {
  const [activeTab, setActiveTab] = useState("inbound");


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
        <h1 className="px-36 text-4xl font">E-Commerce</h1>
        <h1 className="px-36">Capitalize on our skills in creating E-commerce solutions and benefit from reliable, expertly made, <span className="flex ">
        and formidable IT solutions.</span></h1>
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
            Enterprise Solutions for FMCG
          </h2>
          <p className="text-gray-600 leading-relaxed">
          We offer the right SCM solutions and designs for digitalization, secure and innovative solutions. We help you improve the consumer experience in FMCG & Services, on-the-go transactions that speed up and simplify the Inbound & Outbound process as well as inventory management and delivery using 
            <span className="text-orange-500 font-bold">SAP EWM (Extended Warehouse Management)</span> for <span className="text-orange-500 font-bold">Warehouse Management</span> and 
            <span className="text-orange-500 font-bold"> SAP BTP</span> solutions for Mobile and hand-held devices.

          </p>
          <p className="text-justify mt-12"><span className="text-orange-500 font-bold">SAP EWM (Extended Warehouse Management)</span> provides real-time visibility into inventory levels, enabling FMCG companies to optimize their inventory management processes, accurate demand forecasting, automated replenishment, and dynamic inventory allocation. By adopting SAP EWM, companies can reduce inventory costs, improve labor productivity, reduced labor costs and increased operational efficiency.</p>
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

    </div>
  );
}

export default Ecomm;
