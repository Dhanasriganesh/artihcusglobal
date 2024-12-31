import React, { useState } from "react";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle resume file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("resume", formData.resume);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccessMessage("Application submitted successfully!");
      } else {
        setSuccessMessage("Error submitting the application. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Error submitting the application. Please try again.");
    }

    // Clear the form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
    });

    // Reset success message after a delay
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">
          Careers
        </h2>

        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label
              htmlFor="resume"
              className="block text-gray-700 font-medium mb-1"
            >
              Resume (PDF or Word)
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
