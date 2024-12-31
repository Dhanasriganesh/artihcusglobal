import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/Logooo.png';
import { FaTwitter, FaLinkedin, FaBlog } from 'react-icons/fa';
 
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  const navigationItems = {
    Services: ['SAP Services', 'Application Services', 'Artificial Intelligence'],
    'SAP Modules': ['SAP EWM', 'SAP MFS', 'SAP YL', 'SAP TM', 'SAP BTP'],
    Industries: [
      'Fashion & Retail', 'FMCG', '3PL', 'E-Commerce',
      'Manufacturing', 'Pharmaceutical', 'Automotive', 'Food & Beverage'
    ],
    About: ['Careers', 'Events', 'News', 'Blogs']
  };
 
  const handleNavigation = (title, item = null) => {
    const baseRoute = title.toLowerCase().replace(/\s+/g, '-');
    if (item) {
      const itemRoute = item.toLowerCase().replace(/\s+/g, '-');
      navigate(`/${baseRoute}/${itemRoute}`);
    } else {
      navigate(`/${baseRoute}`);
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };
 
  const NavItem = ({ title, items }) => {
    const isActive = activeDropdown === title;
   
    const handleMouseEnter = () => {
      if (window.innerWidth >= 768) {
        setActiveDropdown(title);
      }
    };
 
    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        setActiveDropdown(null);
      }
    };
 
    const handleClick = (e) => {
      e.preventDefault();
      if (window.innerWidth < 768) {
        setActiveDropdown(isActive ? null : title);
      } else {
        handleNavigation(title);
      }
    };
 
    return (
      <div
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handleClick}
          className="w-full md:w-auto px-4 py-3 text-orange-500 text-lg font-semibold relative flex items-center justify-between md:justify-start hover:text-orange-600 transition-colors duration-200"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-1 text-orange-500 transform transition-transform duration-200 ${
              isActive ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full hidden md:block"></span>
        </button>
 
        {isActive && (
          <div className="md:absolute relative left-0 mt-1 w-full md:w-48 bg-white rounded-md shadow-lg py-1 z-50">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(title, item)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };
 
  return (
    <header className={`w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-md z-50 ${
      isSticky ? 'fixed top-0 left-0' : 'relative'
    }`}>
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <Link to="/" className="block">
              <img
                src={logo}
                alt="Artihcus Global"
                className="h-10 w-auto sm:h-12 md:h-14"
              />
            </Link>
          </div>
 
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-4 flex-grow justify-center">
            {Object.entries(navigationItems).map(([title, items]) => (
              <NavItem key={title} title={title} items={items} />
            ))}
            <Link
              to="/contact"
              className="px-4 py-3 text-orange-500 text-lg font-semibold relative group hover:text-orange-600 transition-colors duration-200"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
 
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
              <FaLinkedin size={24} />
            </a>
            <a href="/blog" className="text-orange-500 hover:text-orange-600">
              <FaBlog size={24} />
            </a>
          </div>
 
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-orange-500 hover:text-orange-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
 
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-2">
              {Object.entries(navigationItems).map(([title, items]) => (
                <NavItem key={title} title={title} items={items} />
              ))}
              <Link
                to="/contact"
                className="block px-4 py-3 text-orange-500 hover:text-orange-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
           
            {/* Social Icons - Mobile */}
            <div className="flex justify-center gap-8 py-4 border-t">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
                <FaLinkedin size={20} />
              </a>
              <a href="/blog" className="text-orange-500 hover:text-orange-600">
                <FaBlog size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
 
export default Header;