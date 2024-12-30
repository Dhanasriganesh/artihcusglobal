import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logooo.png';
 
const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  // Navigation data
  const navigationItems = {
    Services: [
      'Implementation Services',
      'Support Services',
      'Migration Services',
      'Integration Services'
    ],
    'SAP Modules': [
      'SAP S/4HANA',
      'SAP Business One',
      'SAP Business ByDesign',
      'SAP SuccessFactors'
    ],
    Industries: [
      'Manufacturing',
      'Retail',
      'Healthcare',
      'Financial Services',
      'Technology'
    ],
    About: [
      'Company Overview',
      'Our Team',
      'Careers',
      'Partners'
    ]
  };
 
  // Dropdown component
  const NavItem = ({ title, items, link }) => {
    const [isOpen, setIsOpen] = useState(false);
 
    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Main Link with Dropdown Arrow */}
        <Link
          to={link || '#'}
          className="px-3 py-2 text-orange-500 flex items-center hover:text-orange-600 transition-colors duration-200"
        >
          {title}
          {items && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </Link>
 
        {/* Dropdown for Sub-items */}
        {isOpen && items && (
          <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            {items.map((item, index) => (
              <Link
                key={index}
                to={`/${title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };
 
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-lg shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Artihcus Global" className="h-12 w-auto" />
            </Link>
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {Object.entries(navigationItems).map(([title, items]) => (
              <NavItem
                key={title}
                title={title}
                items={items}
                link={title === 'Services' ? '/services' : undefined} // Link for "Services"
              />
            ))}
            <Link
              to="/contact"
              className="px-3 py-2 text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
 
          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden p-2 text-orange-500 hover:text-orange-600 focus:outline-none transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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
          <nav className="md:hidden bg-white shadow-lg rounded-lg p-4">
            {Object.entries(navigationItems).map(([title, items]) => (
              <div key={title} className="mb-4">
                <h3 className="text-orange-500 font-medium">{title}</h3>
                <ul className="space-y-2 mt-2">
                  {items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/${title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-2 py-1 text-sm text-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              to="/contact"
              className="block mt-4 px-2 py-1 text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
 
export default Header;