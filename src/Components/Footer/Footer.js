import React from "react";
 
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        {/* About Links Section */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="font-bold text-lg mb-4">About Links</h3>
          <ul className="space-y-2">
            <li><a href="career" className="hover:underline">Careers</a></li>
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
  );
};
 
export default Footer;