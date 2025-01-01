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
            className="w-5/6"
          />
        </div>
        {/* Right Content */}


        <div className="flex-1 relative justify-center max-w-xl">
          <h2 className="text-orange-500 text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-5xl">:</span>
            E-Commerce
          </h2>
          <p className="text-gray-600 leading-relaxed">
          Latest studies conducted by AI Multiple indicate that E-commerce is experiencing a significant shift because of changes in consumer habits and technological advancements. This brings about several obstacles for E-commerce companies that they must address.

          </p>
          <p className="text-justify mt-12"><span className="text-orange-500 font-bold">These challenges encompass:</span> </p>

          <div className="text-gray-600 font-medium mt-5">
        <ul className="space-y-2 list-none">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Utilizing E-commerce data effectively
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Building trust in digital platforms
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Retaining customer loyalty
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Improving supply chain management
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Streamlining operations across international borders
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Addressing the development of user-friendly E-commerce platforms
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Guaranteeing smooth mobile shopping experiences
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Making the return and refund procedures more efficient
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Upholding superior content quality
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
            Offering outstanding online customer support
          </li>
        </ul>
      </div>
      <p className="mt-3">At Artihcus, we boast extensive experience in E-commerce, excelling in crafting cutting-edge business solutions on platforms like Shopify, Adobe Commerce, BigCommerce, SAP Commerce Cloud, Magento, and WooCommerce.</p>
        <p className="mt-5">We offer innovative tools, whether customizing existing solutions or building them from scratch, along with dedicated support to help your business thrive in today's digital landscape. Our e commerce expertise shines through in solutions like CPG Data sales analytics platform, significantly reducing supplier data analysis time and enabling swift, data-driven decisions.</p>
        </div>


      </div>

      {/* Section 3: Challenges Faced */}
      <div className="px-36 py-12 lg:flex lg:space-x-8">
        {/* Right Content */}


        <div className="flex-1 relative justify-center max-w-xl">
          <h2 className="text-orange-500 text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-5xl">:</span>
            Artihcus E-commerce Solutions for Business
          </h2>
          <p className="text-gray-600 leading-relaxed">
           
            <span className="text-orange-500"> Development of bespoke e-commerce software:</span> Are you trying to find a seamless internet experience? Our group will create a tailored e-commerce solution to satisfy your unique business needs.</p>
            <p className="text-gray-600 leading-relaxed mt-5">
           
           <span className="text-orange-500"> Development of solutions based on e-commerce platforms:</span>Make the most of your e-commerce potential by utilising contemporary tools and platforms. Our professionals can use industry-standard solutions to make your ideas a reality.</p>

           <p className="text-gray-600 leading-relaxed mt-5">
           
           <span className="text-orange-500"> Customisation, redesign, and integration of online stores:</span> We effortlessly link with ERPs, payment gateways, third-party services, and more while customising and implementing contemporary UI/UX design. Simplify processes and improve usability to drive company expansion.</p>

           <p className="text-gray-600 leading-relaxed mt-5">
           
           <span className="text-orange-500"> Delivery, deployment, and store migration:</span> Your infrastructure requirements are met by Artihcus. We automate, move, and optimise deployments to improve performance and meet business objectives.</p>

           <p className="text-gray-600 leading-relaxed mt-5">
           
           <span className="text-orange-500"> Evaluation of solutions, advice, and assistance:</span> Experts from Artihcus examine your solutions and offer a plan to improve security, compatibility, and performance with current infrastructure. Use our advice to stay one step ahead of the competition.</p>

           <p className="text-gray-600 leading-relaxed mt-5">
           
           <span className="text-orange-500"> Distribution and Extensions:</span> With the help of our professionals, realise your plugin or extension concept and expand your audience via e-commerce platforms.</p>
        </div>
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={why_retail}
            alt="Manufacturing Factory"
            className="w-5/6 mt-9"
          />
        </div>
      </div>

    </div>
  );
}

export default Ecomm;
