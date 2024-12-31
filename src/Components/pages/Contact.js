import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import contactImage from '../images/Contact.jpg'; // Adjust the path as necessary
 
function Contact() {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${contactImage})`, height: `calc(50vh - 28px)` }} // Adjust 64px based on header height
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
          <form>
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
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <select
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Your Industry *</option>
                <option value="Tech">Tech</option>
                <option value="Health">Health</option>
                <option value="Finance">Finance</option>
              </select>
              <select
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Services/Technologies *</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
              </select>
              <select
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Referred By</option>
                <option value="Friend">Friend</option>
                <option value="Online">Online</option>
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
        </span> Hyderabad
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
                src="https://maps.googleapis.com/maps/api/staticmap?center=Hyderabad,+India&zoom=15&size=300x150&markers=color:red|label:A|Hyderabad,+India&key=YOUR_GOOGLE_MAPS_API_KEY"
                alt="Hyderabad Map"
                className="rounded-lg shadow-md"
              />
            </a>
          </div>
 
          {/* USA Location */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold flex items-center">
            <span className="mr-2 bg-white text-orange-500 p-2 rounded-full">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span> USA
            </h3>
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
                src="https://maps.googleapis.com/maps/api/staticmap?center=Irving,+USA&zoom=15&size=300x150&markers=color:red|label:A|6565+N+MacArthur+Blvd,+Irving,+USA&key=YOUR_GOOGLE_MAPS_API_KEY"
                alt="USA Map"
                className="rounded-lg shadow-md"
              />
            </a>
          </div>
 
          {/* UAE Location */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold flex items-center">
            <span className="mr-2 bg-white text-orange-500 p-2 rounded-full">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span> UAE
            </h3>
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
                src="https://maps.googleapis.com/maps/api/staticmap?center=Dubai,+UAE&zoom=15&size=300x150&markers=color:red|label:A|Dubai,+UAE&key=YOUR_GOOGLE_MAPS_API_KEY"
                alt="UAE Map"
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