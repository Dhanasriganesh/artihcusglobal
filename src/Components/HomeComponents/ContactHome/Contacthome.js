
import React from 'react'
 
function Contacthome() {
  return (
    <div>
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
    </div>
  )
}
 
export default Contacthome
 
 