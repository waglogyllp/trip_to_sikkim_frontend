import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaBoxOpen, FaMapMarkerAlt, FaEnvelope, FaHotel } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import logo from '../images/logo.png';
import '../styles/global.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  const navItems = [
    { name: 'Home', icon: <FaHome />, link: '/' },
    { name: 'About us', icon: <FaInfoCircle />, link: '/about' },
    { name: 'Booking', icon: <FaCalendarAlt />, link: '/booking' },
    { name: 'Packages', icon: <FaBoxOpen />, link: '/packages' },
    { name: 'Location', icon: <FaMapMarkerAlt />, link: '/location' },
    { name: 'Contact us', icon: <FaEnvelope />, link: '/contact' },
    { name: 'Hotels', icon: <FaHotel />, link: '/hotel' }, // Added FaHotel icon for Hotels
  ];

  const activeColor = '#3b5d50';
  const inactiveColor = '#000000'; // Adjust this if you want a different color for inactive items

  return (
    <nav className="w-full max-w-screen-xl px-4 py-2 mx-auto bg shadow-md rounded-b-lg border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 mb-8">
      <div className="container flex items-center justify-between mx-auto">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-16 mr-2" />
          <span className="text-lg font-bold tracking-tight leading-none md:text-xl xl:text-xl dark:text-black">TRIP To SIKKIM</span>
        </a>
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <ul className="flex flex-col gap-2 mt-4 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center p-2 text-sm md:text-sm lg:text-base font-bold tracking-tight leading-none gap-x-2 cursor-pointer transition-colors duration-300 ease-in-out uppercase`}
                style={{
                  color: location.pathname === item.link ? activeColor : inactiveColor,
                  borderBottom: location.pathname === item.link ? `2px solid ${activeColor}` : 'none',
                }}
              >
                <span className="hidden lg:inline">{item.icon}</span>
                <Link
                  to={item.link}
                  className="flex items-center"
                  style={{ textDecoration: 'none' }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="block lg:hidden p-2"
          style={{ color: inactiveColor }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white lg:hidden">
            <ul className="flex flex-col items-center mt-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`p-3 text-sm font-bold tracking-tight leading-none cursor-pointer transition-colors duration-300 ease-in-out uppercase`}
                  style={{
                    color: location.pathname === item.link ? activeColor : inactiveColor,
                    borderBottom: location.pathname === item.link ? `2px solid ${activeColor}` : 'none',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Hide the icon on mobile screens */}
                  <span className="hidden lg:inline">{item.icon}</span>
                  <Link to={item.link} className="ml-2">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
