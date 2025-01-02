import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    window.scrollTo({ top: footer.offsetTop, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Scroll to Top/Down Button */}
      <div className="fixed bottom-8 right-8">
        <button
          className="bg-[#f57e20] text-white p-3 rounded-full shadow-lg hover:bg-[#e06d1b] transition-colors duration-300"
          onClick={isAtTop ? scrollToFooter : scrollToTop}
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isAtTop ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between px-4">
          {/* About Links Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="font-bold text-lg mb-4">About Links</h3>
            <ul className="space-y-2">
              <li><a href="/about/careers" className="hover:underline">Careers</a></li>
              <li><a href="events" className="hover:underline">Events</a></li>
              <li><a href="news" className="hover:underline">News</a></li>
              <li><a href="blogs" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          {/* Contact Details Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="font-bold text-lg mb-4">Contact Details</h3>
            <p className="mb-2 font-semibold">Arithcus Global Private Limited</p>
            <p className="mb-2">
              Plot No. 227 – Kartikeya Towers, 1st floor<br />
              Matrusri Nagar, Miyapur, Hyderabad,<br />
              Telangana 500049, India.
            </p>
            <p className="mb-2">📞 +91–40–35160930</p>
            <p className="mb-2">📧 <a href="mailto:info@arthicus.com" className="hover:underline">info@arthicus.com</a></p>
          </div>
          {/* Social Media Section */}
          <div className="w-full sm:w-1/3">
            <h3 className="font-bold text-lg mb-4">Find us on</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-black hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                X
              </a>
              <a
                href="#"
                className="bg-black hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                in
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm text-gray-400">
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms and Conditions</a> | <a href="#" className="hover:underline">Sitemap</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
