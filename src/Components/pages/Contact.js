import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import contactImage from '../images/Contact.jpg';
import ind from '../../Components/images/idnlocation.png';  // Correct import
import usa from '../../Components/images/usalocation.png';  // Correct import
import uae from '../../Components/images/uaelocation.png';  // Correct import
 
function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    companyName: '',
    country: '',
    industry: '',
    services: '',
    referredBy: '',
    referredName: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      alert(response.data.message);
    } catch (error) {
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div>
      {/* Background Image Section */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${contactImage})`, height: `calc(50vh - 64px)` }} // Adjust 64px based on header height
      >
        {/* Overlay Content */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl sm:text-6xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>
 
      {/* Content Section */}
      <div className="flex flex-col sm:flex-row items-start justify-between p-8 bg-white">
        {/* Left Side Text Section */}
        <div className="sm:w-1/2 pl-12">
          <h2 className="text-3xl font-semibold mb-4 text-orange-500">TALK TO US</h2>
          <p className="mb-4 text-lg">Get in touch with us</p>
          <span>
            <p className=" text-2xl mb-4 text-gray-900 ">
              Thanks for your interest. Please use this area to ask a question, make a comment, or request information. To help us speed things up, we just need a few key details.
            </p>
          </span>
          <h3 className="text-2xl font-semibold mb-2">General Inquiries</h3>
          <p className="text-gray-900 font-semibold">info@artihcus.com</p>
          <p className="text-gray-900 font-semibold">+91-40-35160930</p>
        </div>
 
        {/* Right Side Form Section */}
        <div className="sm:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md pr-14">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4 ">
              <input
                type="text"
                placeholder="First Name *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Number *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Your Company's Name *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <select
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Country *</option>
                <option value="INDIA">INDIA</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
              </select>
              <select
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Your Industry *</option>
                <option value="RETAIL">RETAIL</option>
                <option value="FMG">FMG</option>
                <option value="3PL">3PL</option>
                <option value="E-COMMERCE">E-COMMERCE</option>
                <option value="MANUFACTURING">MANUFACTURING</option>
                <option value="PHARMACEUTICAL">PHARMACEUTICAL</option>
                <option value="AUTOMOBILE">AUTOMOBILE</option>
              </select>
              <select
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Services/Technologies *</option>
                <option value="SAP Warehousing">SAP Warehousing</option>
                <option value="SAP EWM Upgradation">SAP EWM Upgradation</option>
                <option value="SAP EWM Rollouts">SAP EWM Rollouts</option>
                <option value="SAP EWM Migration">SAP EWM Migration</option>
                <option value="SAP Automation">SAP Automation</option>
                <option value="SAP Transportation">SAP Transportation</option>
                <option value="Services and Support">Services and Support</option>
              </select>
              <select
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Referred By</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Sales Person">Sales Person</option>
                <option value="Trade Show/Conferences">Trade Show/Conferences</option>
                <option value="Referred by Peer">Referred by Peer</option>
                <option value="Referred by Industry Analyst">Referred by Industry Analyst </option>
                <option value="Corporate Connect">Corporate Connect</option>
                <option value="Others">Others</option>
              </select>
              <input
                type="text"
                placeholder="Referred Name"
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <textarea
              placeholder="Let us know how we can help you today"
              className="border border-gray-300 p-2 rounded w-full mb-4"
              rows="4"
            ></textarea>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                <span>
                  I agree to using my personal data as per the Arthicus Global
                  Privacy policy
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded w-full font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
 
      {/* Locations Section */}
      <div className="p-8 bg-white">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">
          Locations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hyderabad Location */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="mr-2 bg-white text-orange-500 p-2 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              Hyderabad
            </h3>
            <p className="mt-4">
              <strong>Address:</strong> Arthicus Global Private Limited <br />
              Plot No. 227 – Kartikeya Towers, 1st floor Matrusrinagar, Miyapur,
              Hyderabad, Telangana 500049, India.
            </p>
 
            <p className="mt-2">
              <strong>Phone:</strong> +91–40–35160930
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@arthicus.com
            </p>
            <a
              href="https://www.google.com/maps?q=Arthicus+Global+Private+Limited,+Hyderabad,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
            >
              <img
                src={ind}  // Use imported image
                alt="Hyderabad Location"
                className="rounded-lg shadow-md"
              />
            </a>
          </div>
 
          {/* USA Location */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="mr-2 bg-white text-orange-500 p-2 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              USA
            </h3>
            <p>
              .
            </p>
            <p className="mt-4">
              <strong>Address:</strong> Arthicus Global Inc <br />
              6565 N MacArthur Blvd Suite 225 Irving, TX 75039, USA.
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> +91–40–35160930
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@arthicus.com
            </p>
            <a
              href="https://www.google.com/maps?q=6565+N+MacArthur+Blvd,+Irving,+TX,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
            >
              <img
                src={usa}  // Use imported image
                alt="USA Location"
                className="rounded-lg shadow-md"
              />
            </a>
          </div>
 
          {/* UAE Location */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="mr-2 bg-white text-orange-500 p-2 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              UAE
            </h3>
            <p>
              .
            </p>
            <p className="mt-4">
              <strong>Address:</strong> Arthicus Technologies Co. L.l.c. <br />
              Office 43–44, Al Fahidi, Bur Dubai, P.O.Box 49759 Dubai, UAE.
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> +91–40–35160930
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@arthicus.com
            </p>
            <a
              href="https://www.google.com/maps?q=Al+Fahidi,+Bur+Dubai,+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
            >
              <img
                src={uae}  // Use imported image
                alt="UAE Location"
                className="rounded-lg shadow-md"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;